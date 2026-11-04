#!/usr/bin/env python3
"""Collect top cybersecurity tools from GitHub Search API.
Maintainable: edit CATEGORIES, re-run. Uses GITHUB_TOKEN if set, else unauthenticated (search: 10 req/min).
Outputs data/tools.json with real stars/forks/language/description - never hand-invented.
"""
import json, os, time, urllib.request, urllib.parse, sys

CATEGORIES = {
    "recon-osint":   "topic:osint stars:>1500",
    "pentest":       "topic:penetration-testing stars:>3000",
    "web-security":  "topic:web-security stars:>3000",
    "vuln-scan":     "vulnerability scanner in:description stars:>4000",
    "ctf-pwn":       "topic:ctf stars:>3000",
    "reverse":       "reverse engineering debugger in:description stars:>3000",
    "forensics":"topic:forensics stars:>1000",
    "blue-team":"topic:blue-team stars:>800",
    "password":      "password cracking in:description stars:>2000",
    "network":       "topic:network-security stars:>2000",
    "awesome":       "awesome security in:name,description stars:>15000",
}
TOKEN = os.environ.get("GITHUB_TOKEN","")
def fetch(q):
    url = "https://api.github.com/search/repositories?" + urllib.parse.urlencode({"q":q,"sort":"stars","order":"desc","per_page":25})
    req = urllib.request.Request(url, headers={"Accept":"application/vnd.github+json","User-Agent":"cybersec-academy-collector", **({"Authorization":f"Bearer {TOKEN}"} if TOKEN else {})})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r).get("items",[])
    except urllib.error.HTTPError as e:
        if e.code in (403,429):
            reset = int(e.headers.get("X-RateLimit-Reset","0") or 0)
            wait = max(10, reset - int(time.time()) + 3) if reset else 65
            print(f"rate limited, wait {wait}s", file=sys.stderr); time.sleep(min(wait,90))
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r).get("items",[])
        raise

def main():
    seen={}
    by={}
    for cat,q in CATEGORIES.items():
        items=fetch(q)
        by[cat]=[]
        for it in items:
            if it.get("fork") or it.get("archived"): continue
            rec={"name":it["full_name"],"url":it["html_url"],"desc":it.get("description") or "","stars":it["stargazers_count"],"forks":it["forks_count"],"lang":it.get("language") or "","topics":it.get("topics",[]),"updated":it["updated_at"][:10],"category":cat,"official": it["owner"]["type"]=="Organization"}
            by[cat].append(rec); seen[it["full_name"]]=rec
        print(cat, len(by[cat]))
        _out={"generated_at":time.strftime("%Y-%m-%d"),"total":len(seen),"by_category":by,"tools":sorted(seen.values(),key=lambda x:-x["stars"])}
        with open(os.path.join(os.path.dirname(__file__),"..","data","tools.json"),"w") as _f: json.dump(_out,_f,ensure_ascii=False,indent=2)
        time.sleep(7)
    out={"generated_at":time.strftime("%Y-%m-%d"),"total":len(seen),"by_category":by,"tools":sorted(seen.values(),key=lambda x:-x["stars"])}
    with open(os.path.join(os.path.dirname(__file__),"..","data","tools.json"),"w") as f:
        json.dump(out,f,ensure_ascii=False,indent=2)
    print("TOTAL UNIQUE", len(seen))
if __name__=="__main__": main()
