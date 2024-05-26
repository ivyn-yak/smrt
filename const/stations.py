import pandas as pd
from .Station import Station
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_dir, 'stations.xls')
# file_path = 'stations.xls'
df = pd.read_excel(file_path)
df = df.apply(lambda x: x.str.strip() if x.dtype == "object" else x)

def getStations():
    stations = {}
    for index, row in df.iterrows():
        station = Station(row['stn_code'], row['mrt_station_english'], row['mrt_station_chinese'], row['mrt_line_english'], row['mrt_line_chinese'])
        line, chiLine = station.getLine(), station.getChiLine()
        key = (line, chiLine)
        if key not in stations:
            stations[key] = [station]
        else:
            stations[key].append(station)
    # print(stations[("North-South Line", "南北线")])
    return stations

# def getStnEdges():
#     stn_dict = getStations()
#     stn_list = []
    
#     for key in stn_dict:
#         # print(key, len(stn_dict[key]))
#         line = stn_dict[key]
#         for i in range(len(line)-1):
#             stnObj = line[i]
#             nextStnObj = line[i+1]
#             stn_list.append([stnObj, nextStnObj])

#     return stn_list

def getStnEdges():
    stn_dict = getStations()
    stn_list = []
    
    for key in stn_dict:
        line = stn_dict[key]
        for i in range(len(line)-1):
            stn = line[i].getName()
            nextStn = line[i+1].getName()
            stn_list.append([stn, nextStn])

    return stn_list