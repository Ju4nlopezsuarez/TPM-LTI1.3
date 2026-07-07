/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 78.0, "minX": 0.0, "maxY": 5926.0, "series": [{"data": [[0.0, 78.0], [0.1, 78.0], [0.2, 79.0], [0.3, 79.0], [0.4, 79.0], [0.5, 79.0], [0.6, 79.0], [0.7, 79.0], [0.8, 79.0], [0.9, 79.0], [1.0, 80.0], [1.1, 80.0], [1.2, 80.0], [1.3, 80.0], [1.4, 80.0], [1.5, 80.0], [1.6, 80.0], [1.7, 80.0], [1.8, 81.0], [1.9, 81.0], [2.0, 81.0], [2.1, 81.0], [2.2, 81.0], [2.3, 81.0], [2.4, 81.0], [2.5, 81.0], [2.6, 81.0], [2.7, 81.0], [2.8, 82.0], [2.9, 82.0], [3.0, 82.0], [3.1, 82.0], [3.2, 82.0], [3.3, 82.0], [3.4, 82.0], [3.5, 82.0], [3.6, 82.0], [3.7, 83.0], [3.8, 83.0], [3.9, 83.0], [4.0, 83.0], [4.1, 83.0], [4.2, 83.0], [4.3, 83.0], [4.4, 83.0], [4.5, 83.0], [4.6, 83.0], [4.7, 83.0], [4.8, 83.0], [4.9, 84.0], [5.0, 84.0], [5.1, 84.0], [5.2, 84.0], [5.3, 84.0], [5.4, 84.0], [5.5, 84.0], [5.6, 84.0], [5.7, 84.0], [5.8, 84.0], [5.9, 84.0], [6.0, 84.0], [6.1, 85.0], [6.2, 85.0], [6.3, 85.0], [6.4, 85.0], [6.5, 85.0], [6.6, 85.0], [6.7, 85.0], [6.8, 85.0], [6.9, 85.0], [7.0, 85.0], [7.1, 85.0], [7.2, 86.0], [7.3, 86.0], [7.4, 86.0], [7.5, 86.0], [7.6, 86.0], [7.7, 86.0], [7.8, 86.0], [7.9, 86.0], [8.0, 86.0], [8.1, 86.0], [8.2, 86.0], [8.3, 86.0], [8.4, 86.0], [8.5, 87.0], [8.6, 87.0], [8.7, 87.0], [8.8, 87.0], [8.9, 87.0], [9.0, 87.0], [9.1, 87.0], [9.2, 87.0], [9.3, 87.0], [9.4, 87.0], [9.5, 87.0], [9.6, 87.0], [9.7, 87.0], [9.8, 87.0], [9.9, 87.0], [10.0, 87.0], [10.1, 87.0], [10.2, 87.0], [10.3, 87.0], [10.4, 87.0], [10.5, 87.0], [10.6, 88.0], [10.7, 88.0], [10.8, 88.0], [10.9, 88.0], [11.0, 88.0], [11.1, 88.0], [11.2, 88.0], [11.3, 88.0], [11.4, 88.0], [11.5, 88.0], [11.6, 88.0], [11.7, 88.0], [11.8, 88.0], [11.9, 88.0], [12.0, 88.0], [12.1, 88.0], [12.2, 88.0], [12.3, 88.0], [12.4, 88.0], [12.5, 88.0], [12.6, 89.0], [12.7, 89.0], [12.8, 89.0], [12.9, 89.0], [13.0, 89.0], [13.1, 89.0], [13.2, 89.0], [13.3, 89.0], [13.4, 89.0], [13.5, 89.0], [13.6, 89.0], [13.7, 89.0], [13.8, 89.0], [13.9, 89.0], [14.0, 89.0], [14.1, 90.0], [14.2, 90.0], [14.3, 90.0], [14.4, 90.0], [14.5, 90.0], [14.6, 90.0], [14.7, 90.0], [14.8, 90.0], [14.9, 90.0], [15.0, 90.0], [15.1, 90.0], [15.2, 90.0], [15.3, 90.0], [15.4, 90.0], [15.5, 91.0], [15.6, 91.0], [15.7, 91.0], [15.8, 91.0], [15.9, 91.0], [16.0, 91.0], [16.1, 91.0], [16.2, 91.0], [16.3, 91.0], [16.4, 91.0], [16.5, 91.0], [16.6, 91.0], [16.7, 91.0], [16.8, 91.0], [16.9, 91.0], [17.0, 92.0], [17.1, 92.0], [17.2, 92.0], [17.3, 92.0], [17.4, 92.0], [17.5, 92.0], [17.6, 92.0], [17.7, 92.0], [17.8, 92.0], [17.9, 92.0], [18.0, 92.0], [18.1, 92.0], [18.2, 93.0], [18.3, 93.0], [18.4, 93.0], [18.5, 93.0], [18.6, 93.0], [18.7, 93.0], [18.8, 93.0], [18.9, 93.0], [19.0, 93.0], [19.1, 93.0], [19.2, 93.0], [19.3, 93.0], [19.4, 93.0], [19.5, 93.0], [19.6, 94.0], [19.7, 94.0], [19.8, 94.0], [19.9, 94.0], [20.0, 94.0], [20.1, 94.0], [20.2, 94.0], [20.3, 94.0], [20.4, 94.0], [20.5, 94.0], [20.6, 94.0], [20.7, 94.0], [20.8, 94.0], [20.9, 94.0], [21.0, 94.0], [21.1, 95.0], [21.2, 95.0], [21.3, 95.0], [21.4, 95.0], [21.5, 95.0], [21.6, 95.0], [21.7, 95.0], [21.8, 95.0], [21.9, 95.0], [22.0, 95.0], [22.1, 95.0], [22.2, 95.0], [22.3, 96.0], [22.4, 96.0], [22.5, 96.0], [22.6, 96.0], [22.7, 96.0], [22.8, 96.0], [22.9, 96.0], [23.0, 96.0], [23.1, 96.0], [23.2, 96.0], [23.3, 96.0], [23.4, 96.0], [23.5, 97.0], [23.6, 97.0], [23.7, 97.0], [23.8, 97.0], [23.9, 97.0], [24.0, 97.0], [24.1, 97.0], [24.2, 97.0], [24.3, 97.0], [24.4, 97.0], [24.5, 97.0], [24.6, 98.0], [24.7, 98.0], [24.8, 98.0], [24.9, 98.0], [25.0, 98.0], [25.1, 98.0], [25.2, 98.0], [25.3, 98.0], [25.4, 98.0], [25.5, 99.0], [25.6, 99.0], [25.7, 99.0], [25.8, 99.0], [25.9, 99.0], [26.0, 99.0], [26.1, 99.0], [26.2, 99.0], [26.3, 99.0], [26.4, 99.0], [26.5, 100.0], [26.6, 100.0], [26.7, 100.0], [26.8, 100.0], [26.9, 100.0], [27.0, 100.0], [27.1, 100.0], [27.2, 100.0], [27.3, 100.0], [27.4, 100.0], [27.5, 101.0], [27.6, 101.0], [27.7, 101.0], [27.8, 101.0], [27.9, 101.0], [28.0, 101.0], [28.1, 101.0], [28.2, 101.0], [28.3, 101.0], [28.4, 102.0], [28.5, 102.0], [28.6, 102.0], [28.7, 102.0], [28.8, 102.0], [28.9, 102.0], [29.0, 102.0], [29.1, 102.0], [29.2, 102.0], [29.3, 103.0], [29.4, 103.0], [29.5, 103.0], [29.6, 103.0], [29.7, 103.0], [29.8, 103.0], [29.9, 103.0], [30.0, 103.0], [30.1, 104.0], [30.2, 104.0], [30.3, 104.0], [30.4, 104.0], [30.5, 104.0], [30.6, 104.0], [30.7, 104.0], [30.8, 104.0], [30.9, 105.0], [31.0, 105.0], [31.1, 105.0], [31.2, 105.0], [31.3, 105.0], [31.4, 105.0], [31.5, 105.0], [31.6, 105.0], [31.7, 106.0], [31.8, 106.0], [31.9, 106.0], [32.0, 106.0], [32.1, 106.0], [32.2, 106.0], [32.3, 107.0], [32.4, 107.0], [32.5, 107.0], [32.6, 107.0], [32.7, 107.0], [32.8, 108.0], [32.9, 108.0], [33.0, 108.0], [33.1, 108.0], [33.2, 108.0], [33.3, 108.0], [33.4, 108.0], [33.5, 109.0], [33.6, 109.0], [33.7, 109.0], [33.8, 109.0], [33.9, 109.0], [34.0, 109.0], [34.1, 110.0], [34.2, 110.0], [34.3, 110.0], [34.4, 110.0], [34.5, 110.0], [34.6, 110.0], [34.7, 110.0], [34.8, 110.0], [34.9, 110.0], [35.0, 111.0], [35.1, 111.0], [35.2, 111.0], [35.3, 111.0], [35.4, 111.0], [35.5, 112.0], [35.6, 112.0], [35.7, 112.0], [35.8, 112.0], [35.9, 112.0], [36.0, 112.0], [36.1, 112.0], [36.2, 112.0], [36.3, 113.0], [36.4, 113.0], [36.5, 113.0], [36.6, 113.0], [36.7, 113.0], [36.8, 113.0], [36.9, 114.0], [37.0, 114.0], [37.1, 114.0], [37.2, 114.0], [37.3, 114.0], [37.4, 114.0], [37.5, 115.0], [37.6, 115.0], [37.7, 115.0], [37.8, 115.0], [37.9, 115.0], [38.0, 115.0], [38.1, 116.0], [38.2, 116.0], [38.3, 116.0], [38.4, 116.0], [38.5, 117.0], [38.6, 117.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 118.0], [39.1, 118.0], [39.2, 118.0], [39.3, 118.0], [39.4, 118.0], [39.5, 118.0], [39.6, 119.0], [39.7, 119.0], [39.8, 119.0], [39.9, 119.0], [40.0, 119.0], [40.1, 119.0], [40.2, 120.0], [40.3, 120.0], [40.4, 120.0], [40.5, 120.0], [40.6, 120.0], [40.7, 121.0], [40.8, 121.0], [40.9, 121.0], [41.0, 121.0], [41.1, 122.0], [41.2, 122.0], [41.3, 122.0], [41.4, 122.0], [41.5, 123.0], [41.6, 123.0], [41.7, 123.0], [41.8, 123.0], [41.9, 123.0], [42.0, 123.0], [42.1, 124.0], [42.2, 124.0], [42.3, 124.0], [42.4, 124.0], [42.5, 125.0], [42.6, 125.0], [42.7, 125.0], [42.8, 126.0], [42.9, 126.0], [43.0, 127.0], [43.1, 127.0], [43.2, 127.0], [43.3, 127.0], [43.4, 127.0], [43.5, 128.0], [43.6, 128.0], [43.7, 128.0], [43.8, 129.0], [43.9, 129.0], [44.0, 129.0], [44.1, 129.0], [44.2, 129.0], [44.3, 130.0], [44.4, 130.0], [44.5, 130.0], [44.6, 130.0], [44.7, 131.0], [44.8, 131.0], [44.9, 131.0], [45.0, 131.0], [45.1, 132.0], [45.2, 132.0], [45.3, 132.0], [45.4, 133.0], [45.5, 133.0], [45.6, 133.0], [45.7, 134.0], [45.8, 134.0], [45.9, 134.0], [46.0, 135.0], [46.1, 135.0], [46.2, 135.0], [46.3, 136.0], [46.4, 136.0], [46.5, 136.0], [46.6, 136.0], [46.7, 137.0], [46.8, 137.0], [46.9, 137.0], [47.0, 138.0], [47.1, 138.0], [47.2, 138.0], [47.3, 138.0], [47.4, 138.0], [47.5, 138.0], [47.6, 139.0], [47.7, 139.0], [47.8, 139.0], [47.9, 139.0], [48.0, 139.0], [48.1, 140.0], [48.2, 140.0], [48.3, 140.0], [48.4, 140.0], [48.5, 140.0], [48.6, 141.0], [48.7, 141.0], [48.8, 141.0], [48.9, 142.0], [49.0, 142.0], [49.1, 142.0], [49.2, 142.0], [49.3, 143.0], [49.4, 143.0], [49.5, 143.0], [49.6, 144.0], [49.7, 144.0], [49.8, 144.0], [49.9, 145.0], [50.0, 145.0], [50.1, 145.0], [50.2, 146.0], [50.3, 146.0], [50.4, 146.0], [50.5, 146.0], [50.6, 147.0], [50.7, 147.0], [50.8, 147.0], [50.9, 147.0], [51.0, 148.0], [51.1, 148.0], [51.2, 148.0], [51.3, 148.0], [51.4, 148.0], [51.5, 149.0], [51.6, 149.0], [51.7, 149.0], [51.8, 149.0], [51.9, 150.0], [52.0, 150.0], [52.1, 150.0], [52.2, 150.0], [52.3, 151.0], [52.4, 151.0], [52.5, 151.0], [52.6, 152.0], [52.7, 152.0], [52.8, 152.0], [52.9, 152.0], [53.0, 153.0], [53.1, 153.0], [53.2, 153.0], [53.3, 153.0], [53.4, 154.0], [53.5, 154.0], [53.6, 155.0], [53.7, 155.0], [53.8, 155.0], [53.9, 155.0], [54.0, 156.0], [54.1, 156.0], [54.2, 156.0], [54.3, 156.0], [54.4, 157.0], [54.5, 157.0], [54.6, 158.0], [54.7, 158.0], [54.8, 158.0], [54.9, 159.0], [55.0, 159.0], [55.1, 159.0], [55.2, 160.0], [55.3, 160.0], [55.4, 160.0], [55.5, 160.0], [55.6, 161.0], [55.7, 161.0], [55.8, 161.0], [55.9, 161.0], [56.0, 162.0], [56.1, 162.0], [56.2, 163.0], [56.3, 163.0], [56.4, 163.0], [56.5, 163.0], [56.6, 163.0], [56.7, 164.0], [56.8, 164.0], [56.9, 164.0], [57.0, 165.0], [57.1, 165.0], [57.2, 165.0], [57.3, 165.0], [57.4, 166.0], [57.5, 166.0], [57.6, 166.0], [57.7, 167.0], [57.8, 168.0], [57.9, 168.0], [58.0, 168.0], [58.1, 168.0], [58.2, 169.0], [58.3, 169.0], [58.4, 169.0], [58.5, 170.0], [58.6, 170.0], [58.7, 170.0], [58.8, 170.0], [58.9, 171.0], [59.0, 171.0], [59.1, 172.0], [59.2, 172.0], [59.3, 172.0], [59.4, 173.0], [59.5, 173.0], [59.6, 173.0], [59.7, 174.0], [59.8, 174.0], [59.9, 175.0], [60.0, 175.0], [60.1, 175.0], [60.2, 175.0], [60.3, 176.0], [60.4, 176.0], [60.5, 176.0], [60.6, 177.0], [60.7, 177.0], [60.8, 177.0], [60.9, 178.0], [61.0, 178.0], [61.1, 178.0], [61.2, 179.0], [61.3, 179.0], [61.4, 179.0], [61.5, 180.0], [61.6, 180.0], [61.7, 180.0], [61.8, 180.0], [61.9, 181.0], [62.0, 181.0], [62.1, 181.0], [62.2, 181.0], [62.3, 182.0], [62.4, 182.0], [62.5, 182.0], [62.6, 183.0], [62.7, 183.0], [62.8, 183.0], [62.9, 184.0], [63.0, 184.0], [63.1, 184.0], [63.2, 185.0], [63.3, 186.0], [63.4, 186.0], [63.5, 186.0], [63.6, 186.0], [63.7, 187.0], [63.8, 187.0], [63.9, 187.0], [64.0, 188.0], [64.1, 188.0], [64.2, 189.0], [64.3, 189.0], [64.4, 189.0], [64.5, 190.0], [64.6, 190.0], [64.7, 190.0], [64.8, 190.0], [64.9, 191.0], [65.0, 191.0], [65.1, 191.0], [65.2, 191.0], [65.3, 192.0], [65.4, 192.0], [65.5, 192.0], [65.6, 193.0], [65.7, 193.0], [65.8, 193.0], [65.9, 193.0], [66.0, 193.0], [66.1, 193.0], [66.2, 194.0], [66.3, 194.0], [66.4, 194.0], [66.5, 195.0], [66.6, 195.0], [66.7, 195.0], [66.8, 195.0], [66.9, 195.0], [67.0, 196.0], [67.1, 196.0], [67.2, 197.0], [67.3, 197.0], [67.4, 198.0], [67.5, 198.0], [67.6, 198.0], [67.7, 199.0], [67.8, 200.0], [67.9, 200.0], [68.0, 200.0], [68.1, 201.0], [68.2, 201.0], [68.3, 201.0], [68.4, 202.0], [68.5, 202.0], [68.6, 202.0], [68.7, 203.0], [68.8, 203.0], [68.9, 203.0], [69.0, 204.0], [69.1, 204.0], [69.2, 204.0], [69.3, 205.0], [69.4, 205.0], [69.5, 205.0], [69.6, 205.0], [69.7, 206.0], [69.8, 206.0], [69.9, 207.0], [70.0, 207.0], [70.1, 208.0], [70.2, 208.0], [70.3, 208.0], [70.4, 209.0], [70.5, 209.0], [70.6, 210.0], [70.7, 210.0], [70.8, 210.0], [70.9, 211.0], [71.0, 211.0], [71.1, 211.0], [71.2, 212.0], [71.3, 212.0], [71.4, 212.0], [71.5, 212.0], [71.6, 213.0], [71.7, 213.0], [71.8, 214.0], [71.9, 214.0], [72.0, 214.0], [72.1, 214.0], [72.2, 215.0], [72.3, 215.0], [72.4, 216.0], [72.5, 216.0], [72.6, 216.0], [72.7, 216.0], [72.8, 217.0], [72.9, 217.0], [73.0, 217.0], [73.1, 218.0], [73.2, 218.0], [73.3, 218.0], [73.4, 219.0], [73.5, 219.0], [73.6, 219.0], [73.7, 219.0], [73.8, 220.0], [73.9, 220.0], [74.0, 221.0], [74.1, 221.0], [74.2, 221.0], [74.3, 222.0], [74.4, 222.0], [74.5, 222.0], [74.6, 222.0], [74.7, 223.0], [74.8, 223.0], [74.9, 224.0], [75.0, 224.0], [75.1, 224.0], [75.2, 224.0], [75.3, 225.0], [75.4, 225.0], [75.5, 225.0], [75.6, 226.0], [75.7, 226.0], [75.8, 227.0], [75.9, 227.0], [76.0, 228.0], [76.1, 228.0], [76.2, 229.0], [76.3, 229.0], [76.4, 230.0], [76.5, 230.0], [76.6, 231.0], [76.7, 231.0], [76.8, 231.0], [76.9, 231.0], [77.0, 232.0], [77.1, 232.0], [77.2, 233.0], [77.3, 233.0], [77.4, 233.0], [77.5, 234.0], [77.6, 234.0], [77.7, 235.0], [77.8, 235.0], [77.9, 235.0], [78.0, 236.0], [78.1, 236.0], [78.2, 237.0], [78.3, 237.0], [78.4, 237.0], [78.5, 237.0], [78.6, 238.0], [78.7, 238.0], [78.8, 239.0], [78.9, 239.0], [79.0, 240.0], [79.1, 240.0], [79.2, 241.0], [79.3, 241.0], [79.4, 242.0], [79.5, 242.0], [79.6, 243.0], [79.7, 243.0], [79.8, 244.0], [79.9, 244.0], [80.0, 245.0], [80.1, 245.0], [80.2, 245.0], [80.3, 246.0], [80.4, 246.0], [80.5, 247.0], [80.6, 248.0], [80.7, 248.0], [80.8, 249.0], [80.9, 250.0], [81.0, 250.0], [81.1, 251.0], [81.2, 251.0], [81.3, 252.0], [81.4, 252.0], [81.5, 253.0], [81.6, 254.0], [81.7, 254.0], [81.8, 255.0], [81.9, 255.0], [82.0, 256.0], [82.1, 256.0], [82.2, 257.0], [82.3, 258.0], [82.4, 259.0], [82.5, 259.0], [82.6, 259.0], [82.7, 260.0], [82.8, 260.0], [82.9, 260.0], [83.0, 261.0], [83.1, 261.0], [83.2, 262.0], [83.3, 263.0], [83.4, 264.0], [83.5, 264.0], [83.6, 265.0], [83.7, 265.0], [83.8, 266.0], [83.9, 266.0], [84.0, 266.0], [84.1, 267.0], [84.2, 267.0], [84.3, 268.0], [84.4, 269.0], [84.5, 269.0], [84.6, 270.0], [84.7, 270.0], [84.8, 270.0], [84.9, 271.0], [85.0, 272.0], [85.1, 272.0], [85.2, 273.0], [85.3, 273.0], [85.4, 274.0], [85.5, 274.0], [85.6, 275.0], [85.7, 275.0], [85.8, 276.0], [85.9, 276.0], [86.0, 277.0], [86.1, 277.0], [86.2, 278.0], [86.3, 278.0], [86.4, 278.0], [86.5, 279.0], [86.6, 279.0], [86.7, 280.0], [86.8, 280.0], [86.9, 281.0], [87.0, 281.0], [87.1, 282.0], [87.2, 282.0], [87.3, 283.0], [87.4, 283.0], [87.5, 284.0], [87.6, 285.0], [87.7, 286.0], [87.8, 286.0], [87.9, 287.0], [88.0, 287.0], [88.1, 287.0], [88.2, 288.0], [88.3, 289.0], [88.4, 290.0], [88.5, 291.0], [88.6, 291.0], [88.7, 292.0], [88.8, 292.0], [88.9, 293.0], [89.0, 294.0], [89.1, 294.0], [89.2, 294.0], [89.3, 295.0], [89.4, 296.0], [89.5, 296.0], [89.6, 297.0], [89.7, 298.0], [89.8, 298.0], [89.9, 299.0], [90.0, 300.0], [90.1, 301.0], [90.2, 301.0], [90.3, 302.0], [90.4, 303.0], [90.5, 303.0], [90.6, 304.0], [90.7, 305.0], [90.8, 306.0], [90.9, 307.0], [91.0, 307.0], [91.1, 308.0], [91.2, 309.0], [91.3, 311.0], [91.4, 312.0], [91.5, 313.0], [91.6, 313.0], [91.7, 314.0], [91.8, 314.0], [91.9, 315.0], [92.0, 315.0], [92.1, 317.0], [92.2, 318.0], [92.3, 319.0], [92.4, 320.0], [92.5, 321.0], [92.6, 322.0], [92.7, 324.0], [92.8, 325.0], [92.9, 326.0], [93.0, 328.0], [93.1, 328.0], [93.2, 330.0], [93.3, 331.0], [93.4, 332.0], [93.5, 333.0], [93.6, 335.0], [93.7, 336.0], [93.8, 337.0], [93.9, 338.0], [94.0, 339.0], [94.1, 340.0], [94.2, 341.0], [94.3, 343.0], [94.4, 344.0], [94.5, 345.0], [94.6, 346.0], [94.7, 348.0], [94.8, 350.0], [94.9, 351.0], [95.0, 352.0], [95.1, 354.0], [95.2, 356.0], [95.3, 358.0], [95.4, 359.0], [95.5, 361.0], [95.6, 363.0], [95.7, 364.0], [95.8, 366.0], [95.9, 371.0], [96.0, 372.0], [96.1, 376.0], [96.2, 378.0], [96.3, 379.0], [96.4, 383.0], [96.5, 389.0], [96.6, 394.0], [96.7, 400.0], [96.8, 406.0], [96.9, 411.0], [97.0, 417.0], [97.1, 424.0], [97.2, 433.0], [97.3, 436.0], [97.4, 440.0], [97.5, 445.0], [97.6, 452.0], [97.7, 456.0], [97.8, 457.0], [97.9, 467.0], [98.0, 470.0], [98.1, 478.0], [98.2, 485.0], [98.3, 489.0], [98.4, 493.0], [98.5, 501.0], [98.6, 511.0], [98.7, 529.0], [98.8, 617.0], [98.9, 891.0], [99.0, 1547.0], [99.1, 2053.0], [99.2, 2671.0], [99.3, 3090.0], [99.4, 3698.0], [99.5, 4246.0], [99.6, 4878.0], [99.7, 5337.0], [99.8, 5837.0], [99.9, 5889.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2257.0, "series": [{"data": [[0.0, 1442.0], [600.0, 2.0], [700.0, 2.0], [800.0, 2.0], [1000.0, 1.0], [1100.0, 2.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2600.0, 1.0], [2700.0, 2.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3300.0, 1.0], [3400.0, 2.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4300.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [5100.0, 2.0], [5000.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5400.0, 2.0], [5600.0, 2.0], [5800.0, 8.0], [5900.0, 4.0], [100.0, 2257.0], [200.0, 1212.0], [300.0, 365.0], [400.0, 99.0], [500.0, 16.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5375.0, "series": [{"data": [[0.0, 5375.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 27.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 97.55102717031149, "minX": 1.77823362E12, "maxY": 97.64862648626483, "series": [{"data": [[1.77823362E12, 97.55102717031149], [1.77823368E12, 97.64862648626483]], "isOverall": false, "label": "LTI 1.1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77823368E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 87.0, "minX": 1.0, "maxY": 3401.0909090909067, "series": [{"data": [[4.0, 294.0], [5.0, 288.0], [9.0, 278.3333333333333], [11.0, 292.0], [12.0, 287.0], [14.0, 293.75], [35.0, 206.0], [40.0, 110.0], [45.0, 139.2], [46.0, 92.0], [49.0, 93.0], [51.0, 128.0], [50.0, 87.0], [52.0, 170.0], [56.0, 150.0], [58.0, 295.25], [61.0, 95.66666666666667], [63.0, 88.0], [62.0, 89.0], [64.0, 104.42857142857143], [69.0, 1654.1250000000005], [70.0, 3401.0909090909067], [71.0, 132.99999999999994], [72.0, 180.9767441860465], [73.0, 256.35714285714283], [74.0, 152.5], [75.0, 92.66666666666667], [76.0, 207.0], [78.0, 152.26470588235296], [79.0, 168.75], [80.0, 276.9696969696969], [81.0, 352.27272727272725], [82.0, 279.0], [83.0, 149.0], [84.0, 227.5], [85.0, 117.28571428571429], [86.0, 104.64814814814814], [87.0, 154.52941176470588], [88.0, 112.5], [89.0, 113.33333333333333], [90.0, 110.25], [91.0, 113.66666666666667], [92.0, 120.25], [93.0, 115.2], [94.0, 95.25], [95.0, 132.88000000000002], [96.0, 167.80645161290323], [97.0, 119.5], [99.0, 270.5], [100.0, 170.65429093122378], [1.0, 379.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}, {"data": [[97.59464907458347, 211.71614440168668]], "isOverall": false, "label": "Lanzamiento-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4634.1, "minX": 1.77823362E12, "maxY": 29295.716666666667, "series": [{"data": [[1.77823362E12, 5734.2], [1.77823368E12, 4634.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77823362E12, 29295.716666666667], [1.77823368E12, 23675.683333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77823368E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 165.19967199671999, "minX": 1.77823362E12, "maxY": 249.30848243870193, "series": [{"data": [[1.77823362E12, 249.30848243870193], [1.77823368E12, 165.19967199671999]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77823368E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 165.19967199671999, "minX": 1.77823362E12, "maxY": 249.30483764082217, "series": [{"data": [[1.77823362E12, 249.30483764082217], [1.77823368E12, 165.19967199671999]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77823368E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.77823362E12, "maxY": 75.5586481113323, "series": [{"data": [[1.77823362E12, 75.5586481113323], [1.77823368E12, 0.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77823368E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 78.0, "minX": 1.77823362E12, "maxY": 5926.0, "series": [{"data": [[1.77823362E12, 5926.0], [1.77823368E12, 569.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77823362E12, 78.0], [1.77823368E12, 78.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77823362E12, 319.0], [1.77823368E12, 284.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77823362E12, 4024.839999999991], [1.77823368E12, 364.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77823362E12, 146.0], [1.77823368E12, 144.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77823362E12, 433.0], [1.77823368E12, 316.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77823368E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 97.0, "minX": 14.0, "maxY": 292.5, "series": [{"data": [[84.0, 247.0], [91.0, 104.0], [90.0, 136.0], [89.0, 98.0], [94.0, 111.5], [92.0, 100.0], [93.0, 145.0], [95.0, 100.0], [99.0, 105.0], [98.0, 111.5], [96.0, 97.0], [97.0, 144.5], [102.0, 115.0], [101.0, 116.0], [100.0, 263.5], [105.0, 133.0], [104.0, 188.5], [107.0, 150.0], [108.0, 146.5], [110.0, 197.0], [109.0, 217.0], [111.0, 220.0], [112.0, 234.0], [125.0, 117.0], [136.0, 290.0], [14.0, 292.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 136.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 97.0, "minX": 14.0, "maxY": 292.5, "series": [{"data": [[84.0, 247.0], [91.0, 104.0], [90.0, 136.0], [89.0, 98.0], [94.0, 111.5], [92.0, 100.0], [93.0, 145.0], [95.0, 100.0], [99.0, 105.0], [98.0, 111.5], [96.0, 97.0], [97.0, 144.5], [102.0, 115.0], [101.0, 116.0], [100.0, 263.5], [105.0, 133.0], [104.0, 188.5], [107.0, 150.0], [108.0, 146.5], [110.0, 197.0], [109.0, 217.0], [111.0, 220.0], [112.0, 234.0], [125.0, 117.0], [136.0, 290.0], [14.0, 292.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 136.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 40.166666666666664, "minX": 1.77823362E12, "maxY": 50.78333333333333, "series": [{"data": [[1.77823362E12, 50.78333333333333], [1.77823368E12, 40.166666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77823368E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 40.65, "minX": 1.77823362E12, "maxY": 50.3, "series": [{"data": [[1.77823362E12, 50.3], [1.77823368E12, 40.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77823368E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 40.65, "minX": 1.77823362E12, "maxY": 50.3, "series": [{"data": [[1.77823362E12, 50.3], [1.77823368E12, 40.65]], "isOverall": false, "label": "Lanzamiento-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77823368E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 40.65, "minX": 1.77823362E12, "maxY": 50.3, "series": [{"data": [[1.77823362E12, 50.3], [1.77823368E12, 40.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77823368E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

