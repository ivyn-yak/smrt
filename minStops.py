from collections import defaultdict, deque
from const.stations import getStnEdges

stnList = getStnEdges()

def minStops(stations, start, end):
    adj = defaultdict(list)

    for s1, s2 in stations:
        adj[s1].append(s2)
        adj[s2].append(s1)

    visited = set()
    q = deque([[start, [start]]])
    visited.add(start)

    while q:
        stn, path = q.popleft()
        
        for nextStn in adj[stn]:
            if nextStn == end:
                return path + [nextStn]

            if nextStn not in path and nextStn not in visited:
                visited.add(nextStn)
                q.append([nextStn, path + [nextStn]])

    return None

print(minStops(stnList, "Tan Kah Kee", "Orchard"))



    


