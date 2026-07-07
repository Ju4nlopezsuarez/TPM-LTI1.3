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
        data: {"result": {"minY": 79.0, "minX": 0.0, "maxY": 6007.0, "series": [{"data": [[0.0, 79.0], [0.1, 79.0], [0.2, 80.0], [0.3, 81.0], [0.4, 81.0], [0.5, 81.0], [0.6, 82.0], [0.7, 82.0], [0.8, 82.0], [0.9, 82.0], [1.0, 83.0], [1.1, 83.0], [1.2, 83.0], [1.3, 83.0], [1.4, 84.0], [1.5, 84.0], [1.6, 84.0], [1.7, 84.0], [1.8, 85.0], [1.9, 85.0], [2.0, 85.0], [2.1, 85.0], [2.2, 85.0], [2.3, 85.0], [2.4, 86.0], [2.5, 86.0], [2.6, 86.0], [2.7, 86.0], [2.8, 86.0], [2.9, 86.0], [3.0, 86.0], [3.1, 87.0], [3.2, 87.0], [3.3, 87.0], [3.4, 87.0], [3.5, 88.0], [3.6, 88.0], [3.7, 88.0], [3.8, 88.0], [3.9, 88.0], [4.0, 88.0], [4.1, 88.0], [4.2, 88.0], [4.3, 88.0], [4.4, 88.0], [4.5, 89.0], [4.6, 89.0], [4.7, 89.0], [4.8, 89.0], [4.9, 89.0], [5.0, 89.0], [5.1, 89.0], [5.2, 90.0], [5.3, 90.0], [5.4, 90.0], [5.5, 90.0], [5.6, 90.0], [5.7, 90.0], [5.8, 90.0], [5.9, 91.0], [6.0, 91.0], [6.1, 91.0], [6.2, 91.0], [6.3, 91.0], [6.4, 91.0], [6.5, 91.0], [6.6, 91.0], [6.7, 91.0], [6.8, 91.0], [6.9, 92.0], [7.0, 92.0], [7.1, 92.0], [7.2, 92.0], [7.3, 92.0], [7.4, 92.0], [7.5, 93.0], [7.6, 93.0], [7.7, 93.0], [7.8, 93.0], [7.9, 93.0], [8.0, 93.0], [8.1, 93.0], [8.2, 93.0], [8.3, 93.0], [8.4, 94.0], [8.5, 94.0], [8.6, 94.0], [8.7, 94.0], [8.8, 94.0], [8.9, 94.0], [9.0, 94.0], [9.1, 95.0], [9.2, 95.0], [9.3, 95.0], [9.4, 95.0], [9.5, 95.0], [9.6, 95.0], [9.7, 95.0], [9.8, 96.0], [9.9, 96.0], [10.0, 96.0], [10.1, 96.0], [10.2, 96.0], [10.3, 96.0], [10.4, 96.0], [10.5, 96.0], [10.6, 96.0], [10.7, 96.0], [10.8, 97.0], [10.9, 97.0], [11.0, 97.0], [11.1, 97.0], [11.2, 97.0], [11.3, 97.0], [11.4, 97.0], [11.5, 97.0], [11.6, 97.0], [11.7, 98.0], [11.8, 98.0], [11.9, 98.0], [12.0, 98.0], [12.1, 98.0], [12.2, 98.0], [12.3, 98.0], [12.4, 98.0], [12.5, 98.0], [12.6, 98.0], [12.7, 99.0], [12.8, 99.0], [12.9, 99.0], [13.0, 99.0], [13.1, 99.0], [13.2, 99.0], [13.3, 99.0], [13.4, 100.0], [13.5, 100.0], [13.6, 100.0], [13.7, 100.0], [13.8, 100.0], [13.9, 100.0], [14.0, 100.0], [14.1, 101.0], [14.2, 101.0], [14.3, 101.0], [14.4, 101.0], [14.5, 101.0], [14.6, 101.0], [14.7, 101.0], [14.8, 101.0], [14.9, 102.0], [15.0, 102.0], [15.1, 102.0], [15.2, 102.0], [15.3, 102.0], [15.4, 102.0], [15.5, 102.0], [15.6, 103.0], [15.7, 103.0], [15.8, 103.0], [15.9, 103.0], [16.0, 103.0], [16.1, 103.0], [16.2, 103.0], [16.3, 103.0], [16.4, 104.0], [16.5, 104.0], [16.6, 104.0], [16.7, 104.0], [16.8, 104.0], [16.9, 104.0], [17.0, 104.0], [17.1, 104.0], [17.2, 104.0], [17.3, 104.0], [17.4, 104.0], [17.5, 105.0], [17.6, 105.0], [17.7, 105.0], [17.8, 105.0], [17.9, 105.0], [18.0, 105.0], [18.1, 105.0], [18.2, 106.0], [18.3, 106.0], [18.4, 106.0], [18.5, 106.0], [18.6, 106.0], [18.7, 106.0], [18.8, 106.0], [18.9, 106.0], [19.0, 106.0], [19.1, 107.0], [19.2, 107.0], [19.3, 107.0], [19.4, 107.0], [19.5, 107.0], [19.6, 107.0], [19.7, 107.0], [19.8, 107.0], [19.9, 108.0], [20.0, 108.0], [20.1, 108.0], [20.2, 108.0], [20.3, 108.0], [20.4, 108.0], [20.5, 108.0], [20.6, 109.0], [20.7, 109.0], [20.8, 109.0], [20.9, 109.0], [21.0, 109.0], [21.1, 109.0], [21.2, 109.0], [21.3, 109.0], [21.4, 109.0], [21.5, 109.0], [21.6, 110.0], [21.7, 110.0], [21.8, 110.0], [21.9, 110.0], [22.0, 110.0], [22.1, 110.0], [22.2, 110.0], [22.3, 110.0], [22.4, 110.0], [22.5, 110.0], [22.6, 111.0], [22.7, 111.0], [22.8, 111.0], [22.9, 111.0], [23.0, 111.0], [23.1, 111.0], [23.2, 111.0], [23.3, 111.0], [23.4, 112.0], [23.5, 112.0], [23.6, 112.0], [23.7, 112.0], [23.8, 112.0], [23.9, 112.0], [24.0, 113.0], [24.1, 113.0], [24.2, 113.0], [24.3, 113.0], [24.4, 113.0], [24.5, 113.0], [24.6, 113.0], [24.7, 113.0], [24.8, 113.0], [24.9, 113.0], [25.0, 114.0], [25.1, 114.0], [25.2, 114.0], [25.3, 114.0], [25.4, 114.0], [25.5, 114.0], [25.6, 114.0], [25.7, 114.0], [25.8, 114.0], [25.9, 114.0], [26.0, 114.0], [26.1, 114.0], [26.2, 115.0], [26.3, 115.0], [26.4, 115.0], [26.5, 115.0], [26.6, 115.0], [26.7, 115.0], [26.8, 115.0], [26.9, 116.0], [27.0, 116.0], [27.1, 116.0], [27.2, 116.0], [27.3, 116.0], [27.4, 116.0], [27.5, 116.0], [27.6, 116.0], [27.7, 116.0], [27.8, 116.0], [27.9, 116.0], [28.0, 116.0], [28.1, 117.0], [28.2, 117.0], [28.3, 117.0], [28.4, 117.0], [28.5, 117.0], [28.6, 117.0], [28.7, 117.0], [28.8, 118.0], [28.9, 118.0], [29.0, 118.0], [29.1, 118.0], [29.2, 118.0], [29.3, 118.0], [29.4, 119.0], [29.5, 119.0], [29.6, 119.0], [29.7, 119.0], [29.8, 119.0], [29.9, 119.0], [30.0, 119.0], [30.1, 119.0], [30.2, 120.0], [30.3, 120.0], [30.4, 120.0], [30.5, 120.0], [30.6, 120.0], [30.7, 120.0], [30.8, 120.0], [30.9, 120.0], [31.0, 121.0], [31.1, 121.0], [31.2, 121.0], [31.3, 121.0], [31.4, 121.0], [31.5, 121.0], [31.6, 121.0], [31.7, 121.0], [31.8, 121.0], [31.9, 122.0], [32.0, 122.0], [32.1, 122.0], [32.2, 122.0], [32.3, 122.0], [32.4, 123.0], [32.5, 123.0], [32.6, 123.0], [32.7, 123.0], [32.8, 123.0], [32.9, 123.0], [33.0, 124.0], [33.1, 124.0], [33.2, 124.0], [33.3, 124.0], [33.4, 124.0], [33.5, 124.0], [33.6, 124.0], [33.7, 124.0], [33.8, 124.0], [33.9, 125.0], [34.0, 125.0], [34.1, 125.0], [34.2, 125.0], [34.3, 125.0], [34.4, 126.0], [34.5, 126.0], [34.6, 126.0], [34.7, 126.0], [34.8, 126.0], [34.9, 126.0], [35.0, 126.0], [35.1, 126.0], [35.2, 127.0], [35.3, 127.0], [35.4, 127.0], [35.5, 127.0], [35.6, 127.0], [35.7, 128.0], [35.8, 128.0], [35.9, 128.0], [36.0, 128.0], [36.1, 128.0], [36.2, 129.0], [36.3, 129.0], [36.4, 129.0], [36.5, 129.0], [36.6, 129.0], [36.7, 129.0], [36.8, 130.0], [36.9, 130.0], [37.0, 130.0], [37.1, 130.0], [37.2, 130.0], [37.3, 130.0], [37.4, 131.0], [37.5, 131.0], [37.6, 131.0], [37.7, 131.0], [37.8, 131.0], [37.9, 131.0], [38.0, 132.0], [38.1, 132.0], [38.2, 132.0], [38.3, 132.0], [38.4, 132.0], [38.5, 133.0], [38.6, 133.0], [38.7, 133.0], [38.8, 133.0], [38.9, 133.0], [39.0, 133.0], [39.1, 133.0], [39.2, 134.0], [39.3, 134.0], [39.4, 134.0], [39.5, 134.0], [39.6, 134.0], [39.7, 135.0], [39.8, 135.0], [39.9, 135.0], [40.0, 135.0], [40.1, 135.0], [40.2, 136.0], [40.3, 136.0], [40.4, 136.0], [40.5, 136.0], [40.6, 136.0], [40.7, 137.0], [40.8, 137.0], [40.9, 137.0], [41.0, 137.0], [41.1, 137.0], [41.2, 138.0], [41.3, 138.0], [41.4, 138.0], [41.5, 138.0], [41.6, 138.0], [41.7, 138.0], [41.8, 139.0], [41.9, 139.0], [42.0, 139.0], [42.1, 139.0], [42.2, 140.0], [42.3, 140.0], [42.4, 140.0], [42.5, 140.0], [42.6, 140.0], [42.7, 141.0], [42.8, 141.0], [42.9, 141.0], [43.0, 141.0], [43.1, 141.0], [43.2, 141.0], [43.3, 141.0], [43.4, 141.0], [43.5, 142.0], [43.6, 142.0], [43.7, 142.0], [43.8, 142.0], [43.9, 142.0], [44.0, 143.0], [44.1, 143.0], [44.2, 143.0], [44.3, 143.0], [44.4, 143.0], [44.5, 143.0], [44.6, 144.0], [44.7, 144.0], [44.8, 144.0], [44.9, 144.0], [45.0, 145.0], [45.1, 145.0], [45.2, 145.0], [45.3, 145.0], [45.4, 146.0], [45.5, 146.0], [45.6, 146.0], [45.7, 147.0], [45.8, 147.0], [45.9, 147.0], [46.0, 148.0], [46.1, 148.0], [46.2, 148.0], [46.3, 148.0], [46.4, 149.0], [46.5, 149.0], [46.6, 149.0], [46.7, 150.0], [46.8, 150.0], [46.9, 150.0], [47.0, 150.0], [47.1, 150.0], [47.2, 150.0], [47.3, 151.0], [47.4, 151.0], [47.5, 151.0], [47.6, 152.0], [47.7, 152.0], [47.8, 152.0], [47.9, 152.0], [48.0, 152.0], [48.1, 153.0], [48.2, 153.0], [48.3, 154.0], [48.4, 154.0], [48.5, 154.0], [48.6, 154.0], [48.7, 154.0], [48.8, 155.0], [48.9, 155.0], [49.0, 155.0], [49.1, 156.0], [49.2, 156.0], [49.3, 156.0], [49.4, 156.0], [49.5, 156.0], [49.6, 156.0], [49.7, 157.0], [49.8, 157.0], [49.9, 157.0], [50.0, 157.0], [50.1, 157.0], [50.2, 158.0], [50.3, 158.0], [50.4, 158.0], [50.5, 158.0], [50.6, 159.0], [50.7, 159.0], [50.8, 159.0], [50.9, 160.0], [51.0, 160.0], [51.1, 160.0], [51.2, 160.0], [51.3, 161.0], [51.4, 161.0], [51.5, 161.0], [51.6, 161.0], [51.7, 162.0], [51.8, 162.0], [51.9, 162.0], [52.0, 162.0], [52.1, 162.0], [52.2, 163.0], [52.3, 163.0], [52.4, 163.0], [52.5, 164.0], [52.6, 164.0], [52.7, 164.0], [52.8, 165.0], [52.9, 165.0], [53.0, 166.0], [53.1, 166.0], [53.2, 166.0], [53.3, 166.0], [53.4, 167.0], [53.5, 167.0], [53.6, 167.0], [53.7, 168.0], [53.8, 168.0], [53.9, 169.0], [54.0, 170.0], [54.1, 170.0], [54.2, 170.0], [54.3, 170.0], [54.4, 170.0], [54.5, 171.0], [54.6, 171.0], [54.7, 171.0], [54.8, 171.0], [54.9, 172.0], [55.0, 172.0], [55.1, 172.0], [55.2, 172.0], [55.3, 173.0], [55.4, 174.0], [55.5, 174.0], [55.6, 174.0], [55.7, 175.0], [55.8, 175.0], [55.9, 176.0], [56.0, 176.0], [56.1, 176.0], [56.2, 177.0], [56.3, 177.0], [56.4, 177.0], [56.5, 178.0], [56.6, 178.0], [56.7, 178.0], [56.8, 179.0], [56.9, 179.0], [57.0, 179.0], [57.1, 180.0], [57.2, 180.0], [57.3, 180.0], [57.4, 180.0], [57.5, 181.0], [57.6, 181.0], [57.7, 181.0], [57.8, 181.0], [57.9, 181.0], [58.0, 182.0], [58.1, 182.0], [58.2, 182.0], [58.3, 182.0], [58.4, 183.0], [58.5, 183.0], [58.6, 183.0], [58.7, 183.0], [58.8, 183.0], [58.9, 183.0], [59.0, 184.0], [59.1, 184.0], [59.2, 184.0], [59.3, 184.0], [59.4, 185.0], [59.5, 185.0], [59.6, 185.0], [59.7, 185.0], [59.8, 186.0], [59.9, 186.0], [60.0, 186.0], [60.1, 186.0], [60.2, 186.0], [60.3, 187.0], [60.4, 187.0], [60.5, 187.0], [60.6, 187.0], [60.7, 188.0], [60.8, 188.0], [60.9, 188.0], [61.0, 188.0], [61.1, 189.0], [61.2, 189.0], [61.3, 189.0], [61.4, 189.0], [61.5, 190.0], [61.6, 190.0], [61.7, 190.0], [61.8, 190.0], [61.9, 190.0], [62.0, 190.0], [62.1, 191.0], [62.2, 191.0], [62.3, 191.0], [62.4, 191.0], [62.5, 191.0], [62.6, 192.0], [62.7, 192.0], [62.8, 192.0], [62.9, 193.0], [63.0, 193.0], [63.1, 193.0], [63.2, 193.0], [63.3, 193.0], [63.4, 194.0], [63.5, 194.0], [63.6, 194.0], [63.7, 194.0], [63.8, 195.0], [63.9, 195.0], [64.0, 195.0], [64.1, 195.0], [64.2, 195.0], [64.3, 196.0], [64.4, 196.0], [64.5, 196.0], [64.6, 196.0], [64.7, 196.0], [64.8, 197.0], [64.9, 197.0], [65.0, 197.0], [65.1, 197.0], [65.2, 198.0], [65.3, 198.0], [65.4, 198.0], [65.5, 198.0], [65.6, 198.0], [65.7, 199.0], [65.8, 199.0], [65.9, 199.0], [66.0, 199.0], [66.1, 199.0], [66.2, 199.0], [66.3, 200.0], [66.4, 200.0], [66.5, 200.0], [66.6, 200.0], [66.7, 200.0], [66.8, 201.0], [66.9, 201.0], [67.0, 201.0], [67.1, 201.0], [67.2, 201.0], [67.3, 202.0], [67.4, 202.0], [67.5, 202.0], [67.6, 202.0], [67.7, 202.0], [67.8, 203.0], [67.9, 203.0], [68.0, 203.0], [68.1, 203.0], [68.2, 204.0], [68.3, 204.0], [68.4, 204.0], [68.5, 205.0], [68.6, 205.0], [68.7, 205.0], [68.8, 205.0], [68.9, 205.0], [69.0, 205.0], [69.1, 206.0], [69.2, 206.0], [69.3, 206.0], [69.4, 206.0], [69.5, 207.0], [69.6, 207.0], [69.7, 207.0], [69.8, 207.0], [69.9, 207.0], [70.0, 208.0], [70.1, 208.0], [70.2, 208.0], [70.3, 209.0], [70.4, 209.0], [70.5, 209.0], [70.6, 210.0], [70.7, 210.0], [70.8, 210.0], [70.9, 211.0], [71.0, 211.0], [71.1, 211.0], [71.2, 212.0], [71.3, 212.0], [71.4, 213.0], [71.5, 213.0], [71.6, 213.0], [71.7, 213.0], [71.8, 214.0], [71.9, 214.0], [72.0, 215.0], [72.1, 215.0], [72.2, 215.0], [72.3, 216.0], [72.4, 216.0], [72.5, 216.0], [72.6, 217.0], [72.7, 217.0], [72.8, 217.0], [72.9, 218.0], [73.0, 218.0], [73.1, 218.0], [73.2, 219.0], [73.3, 219.0], [73.4, 220.0], [73.5, 220.0], [73.6, 220.0], [73.7, 221.0], [73.8, 221.0], [73.9, 221.0], [74.0, 222.0], [74.1, 222.0], [74.2, 223.0], [74.3, 223.0], [74.4, 224.0], [74.5, 224.0], [74.6, 224.0], [74.7, 224.0], [74.8, 225.0], [74.9, 225.0], [75.0, 226.0], [75.1, 226.0], [75.2, 226.0], [75.3, 226.0], [75.4, 227.0], [75.5, 228.0], [75.6, 228.0], [75.7, 228.0], [75.8, 229.0], [75.9, 229.0], [76.0, 229.0], [76.1, 230.0], [76.2, 231.0], [76.3, 231.0], [76.4, 231.0], [76.5, 231.0], [76.6, 232.0], [76.7, 232.0], [76.8, 232.0], [76.9, 233.0], [77.0, 234.0], [77.1, 234.0], [77.2, 235.0], [77.3, 236.0], [77.4, 236.0], [77.5, 237.0], [77.6, 237.0], [77.7, 238.0], [77.8, 238.0], [77.9, 239.0], [78.0, 239.0], [78.1, 240.0], [78.2, 240.0], [78.3, 240.0], [78.4, 240.0], [78.5, 241.0], [78.6, 241.0], [78.7, 242.0], [78.8, 242.0], [78.9, 243.0], [79.0, 243.0], [79.1, 244.0], [79.2, 244.0], [79.3, 245.0], [79.4, 245.0], [79.5, 245.0], [79.6, 246.0], [79.7, 246.0], [79.8, 247.0], [79.9, 247.0], [80.0, 248.0], [80.1, 249.0], [80.2, 250.0], [80.3, 250.0], [80.4, 250.0], [80.5, 251.0], [80.6, 251.0], [80.7, 251.0], [80.8, 253.0], [80.9, 254.0], [81.0, 254.0], [81.1, 254.0], [81.2, 255.0], [81.3, 255.0], [81.4, 256.0], [81.5, 257.0], [81.6, 258.0], [81.7, 258.0], [81.8, 259.0], [81.9, 260.0], [82.0, 260.0], [82.1, 261.0], [82.2, 261.0], [82.3, 262.0], [82.4, 263.0], [82.5, 264.0], [82.6, 264.0], [82.7, 264.0], [82.8, 264.0], [82.9, 265.0], [83.0, 265.0], [83.1, 266.0], [83.2, 266.0], [83.3, 267.0], [83.4, 267.0], [83.5, 267.0], [83.6, 269.0], [83.7, 269.0], [83.8, 270.0], [83.9, 270.0], [84.0, 272.0], [84.1, 273.0], [84.2, 274.0], [84.3, 274.0], [84.4, 275.0], [84.5, 275.0], [84.6, 277.0], [84.7, 279.0], [84.8, 279.0], [84.9, 280.0], [85.0, 280.0], [85.1, 281.0], [85.2, 282.0], [85.3, 283.0], [85.4, 283.0], [85.5, 284.0], [85.6, 285.0], [85.7, 285.0], [85.8, 286.0], [85.9, 286.0], [86.0, 288.0], [86.1, 288.0], [86.2, 289.0], [86.3, 290.0], [86.4, 290.0], [86.5, 291.0], [86.6, 293.0], [86.7, 294.0], [86.8, 294.0], [86.9, 295.0], [87.0, 295.0], [87.1, 296.0], [87.2, 298.0], [87.3, 300.0], [87.4, 300.0], [87.5, 301.0], [87.6, 302.0], [87.7, 302.0], [87.8, 302.0], [87.9, 303.0], [88.0, 305.0], [88.1, 305.0], [88.2, 306.0], [88.3, 307.0], [88.4, 308.0], [88.5, 311.0], [88.6, 313.0], [88.7, 314.0], [88.8, 319.0], [88.9, 321.0], [89.0, 323.0], [89.1, 325.0], [89.2, 328.0], [89.3, 328.0], [89.4, 329.0], [89.5, 330.0], [89.6, 331.0], [89.7, 332.0], [89.8, 334.0], [89.9, 336.0], [90.0, 339.0], [90.1, 340.0], [90.2, 343.0], [90.3, 345.0], [90.4, 345.0], [90.5, 346.0], [90.6, 348.0], [90.7, 349.0], [90.8, 349.0], [90.9, 351.0], [91.0, 352.0], [91.1, 353.0], [91.2, 353.0], [91.3, 354.0], [91.4, 355.0], [91.5, 355.0], [91.6, 356.0], [91.7, 357.0], [91.8, 357.0], [91.9, 359.0], [92.0, 360.0], [92.1, 360.0], [92.2, 361.0], [92.3, 361.0], [92.4, 364.0], [92.5, 365.0], [92.6, 366.0], [92.7, 368.0], [92.8, 369.0], [92.9, 371.0], [93.0, 375.0], [93.1, 380.0], [93.2, 380.0], [93.3, 382.0], [93.4, 383.0], [93.5, 385.0], [93.6, 387.0], [93.7, 388.0], [93.8, 389.0], [93.9, 390.0], [94.0, 393.0], [94.1, 395.0], [94.2, 397.0], [94.3, 399.0], [94.4, 401.0], [94.5, 402.0], [94.6, 404.0], [94.7, 405.0], [94.8, 405.0], [94.9, 406.0], [95.0, 408.0], [95.1, 408.0], [95.2, 410.0], [95.3, 413.0], [95.4, 414.0], [95.5, 418.0], [95.6, 421.0], [95.7, 422.0], [95.8, 424.0], [95.9, 426.0], [96.0, 427.0], [96.1, 429.0], [96.2, 430.0], [96.3, 432.0], [96.4, 434.0], [96.5, 435.0], [96.6, 437.0], [96.7, 444.0], [96.8, 448.0], [96.9, 450.0], [97.0, 453.0], [97.1, 455.0], [97.2, 458.0], [97.3, 462.0], [97.4, 463.0], [97.5, 467.0], [97.6, 495.0], [97.7, 507.0], [97.8, 517.0], [97.9, 537.0], [98.0, 598.0], [98.1, 660.0], [98.2, 1103.0], [98.3, 1395.0], [98.4, 1696.0], [98.5, 2139.0], [98.6, 2453.0], [98.7, 2659.0], [98.8, 3099.0], [98.9, 3462.0], [99.0, 3761.0], [99.1, 4096.0], [99.2, 4457.0], [99.3, 4702.0], [99.4, 5108.0], [99.5, 5448.0], [99.6, 5762.0], [99.7, 5910.0], [99.8, 5946.0], [99.9, 5998.0], [100.0, 6007.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1762.0, "series": [{"data": [[0.0, 444.0], [600.0, 3.0], [700.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [100.0, 1762.0], [1700.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 2.0], [2400.0, 2.0], [2600.0, 2.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [3200.0, 1.0], [200.0, 699.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 2.0], [3900.0, 1.0], [4000.0, 2.0], [4200.0, 2.0], [4500.0, 2.0], [4400.0, 1.0], [4800.0, 1.0], [4700.0, 2.0], [300.0, 234.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 2.0], [5400.0, 2.0], [5500.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [5900.0, 9.0], [6000.0, 2.0], [400.0, 111.0], [500.0, 12.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3250.0, "series": [{"data": [[0.0, 3250.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 83.09385113268613, "minX": 1.77822978E12, "maxY": 98.18482941371327, "series": [{"data": [[1.77822978E12, 98.18482941371327], [1.77822984E12, 83.09385113268613]], "isOverall": false, "label": "LTI 1.1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822984E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 84.0, "minX": 1.0, "maxY": 3520.0256410256407, "series": [{"data": [[2.0, 100.0], [3.0, 90.0], [4.0, 116.0], [5.0, 91.0], [6.0, 90.0], [7.0, 95.0], [8.0, 84.0], [9.0, 104.0], [10.0, 97.0], [13.0, 119.66666666666667], [14.0, 180.125], [18.0, 203.75], [34.0, 213.875], [51.0, 220.5294117647059], [58.0, 204.28571428571428], [61.0, 201.0], [64.0, 229.6], [70.0, 3520.0256410256407], [71.0, 2127.1800000000003], [72.0, 198.16129032258067], [73.0, 197.0], [74.0, 272.3], [75.0, 310.5], [76.0, 167.33333333333334], [77.0, 214.0], [78.0, 182.8], [79.0, 97.0], [80.0, 192.66666666666666], [81.0, 176.0], [82.0, 112.0], [83.0, 219.66666666666666], [84.0, 194.0344827586207], [85.0, 230.0], [86.0, 185.5], [87.0, 172.5], [88.0, 158.2], [89.0, 129.2], [90.0, 157.33333333333334], [91.0, 160.66666666666666], [92.0, 178.0], [93.0, 218.33333333333334], [94.0, 193.0], [95.0, 181.2], [96.0, 227.0], [97.0, 153.77777777777777], [98.0, 168.9090909090909], [99.0, 124.0], [100.0, 180.41598915989132], [1.0, 155.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}, {"data": [[96.78365384615395, 250.27283653846143]], "isOverall": false, "label": "Lanzamiento-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 587.1, "minX": 1.77822978E12, "maxY": 29304.216666666667, "series": [{"data": [[1.77822978E12, 5736.1], [1.77822984E12, 587.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77822978E12, 29304.216666666667], [1.77822984E12, 2999.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822984E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 153.0873786407768, "minX": 1.77822978E12, "maxY": 260.2199403776084, "series": [{"data": [[1.77822978E12, 260.2199403776084], [1.77822984E12, 153.0873786407768]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822984E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 153.0873786407768, "minX": 1.77822978E12, "maxY": 260.1957601854915, "series": [{"data": [[1.77822978E12, 260.1957601854915], [1.77822984E12, 153.0873786407768]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822984E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77822978E12, "maxY": 76.70950645909248, "series": [{"data": [[1.77822978E12, 76.70950645909248], [1.77822984E12, 0.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822984E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 79.0, "minX": 1.77822978E12, "maxY": 6007.0, "series": [{"data": [[1.77822978E12, 6007.0], [1.77822984E12, 426.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77822978E12, 79.0], [1.77822984E12, 84.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77822978E12, 351.0], [1.77822984E12, 221.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77822978E12, 4078.0000000000164], [1.77822984E12, 284.69999999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77822978E12, 160.0], [1.77822984E12, 133.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77822978E12, 417.0], [1.77822984E12, 244.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822984E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 97.5, "minX": 4.0, "maxY": 3680.0, "series": [{"data": [[41.0, 121.0], [40.0, 185.0], [44.0, 156.0], [45.0, 124.0], [46.0, 118.0], [47.0, 183.0], [53.0, 100.5], [58.0, 121.0], [60.0, 135.5], [63.0, 116.0], [64.0, 180.0], [67.0, 110.0], [4.0, 108.0], [68.0, 3680.0], [79.0, 136.0], [80.0, 226.5], [81.0, 122.0], [82.0, 184.0], [83.0, 97.5], [84.0, 132.5], [86.0, 193.0], [85.0, 160.0], [87.0, 240.0], [89.0, 146.0], [88.0, 132.0], [91.0, 202.0], [19.0, 196.0], [20.0, 211.0], [21.0, 236.0], [22.0, 187.5], [23.0, 175.0], [24.0, 216.5], [25.0, 129.0], [26.0, 192.5], [30.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 97.5, "minX": 4.0, "maxY": 3680.0, "series": [{"data": [[41.0, 121.0], [40.0, 185.0], [44.0, 156.0], [45.0, 124.0], [46.0, 118.0], [47.0, 183.0], [53.0, 100.5], [58.0, 121.0], [60.0, 135.5], [63.0, 116.0], [64.0, 180.0], [67.0, 110.0], [4.0, 108.0], [68.0, 3680.0], [79.0, 136.0], [80.0, 226.5], [81.0, 122.0], [82.0, 184.0], [83.0, 97.5], [84.0, 132.5], [86.0, 193.0], [85.0, 160.0], [87.0, 240.0], [89.0, 146.0], [88.0, 132.0], [91.0, 202.0], [19.0, 196.0], [20.0, 211.0], [21.0, 236.0], [22.0, 187.5], [23.0, 175.0], [24.0, 216.5], [25.0, 129.0], [26.0, 192.5], [30.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 91.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.1, "minX": 1.77822978E12, "maxY": 50.36666666666667, "series": [{"data": [[1.77822978E12, 50.36666666666667], [1.77822984E12, 5.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822984E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.15, "minX": 1.77822978E12, "maxY": 50.31666666666667, "series": [{"data": [[1.77822978E12, 50.31666666666667], [1.77822984E12, 5.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822984E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.15, "minX": 1.77822978E12, "maxY": 50.31666666666667, "series": [{"data": [[1.77822978E12, 50.31666666666667], [1.77822984E12, 5.15]], "isOverall": false, "label": "Lanzamiento-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822984E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.15, "minX": 1.77822978E12, "maxY": 50.31666666666667, "series": [{"data": [[1.77822978E12, 50.31666666666667], [1.77822984E12, 5.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822984E12, "title": "Total Transactions Per Second"}},
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

