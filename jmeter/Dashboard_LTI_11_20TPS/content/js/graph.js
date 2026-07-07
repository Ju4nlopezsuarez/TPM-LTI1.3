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
        data: {"result": {"minY": 80.0, "minX": 0.0, "maxY": 6225.0, "series": [{"data": [[0.0, 80.0], [0.1, 80.0], [0.2, 80.0], [0.3, 80.0], [0.4, 80.0], [0.5, 80.0], [0.6, 80.0], [0.7, 81.0], [0.8, 81.0], [0.9, 81.0], [1.0, 81.0], [1.1, 81.0], [1.2, 81.0], [1.3, 81.0], [1.4, 81.0], [1.5, 82.0], [1.6, 82.0], [1.7, 82.0], [1.8, 82.0], [1.9, 82.0], [2.0, 82.0], [2.1, 82.0], [2.2, 82.0], [2.3, 82.0], [2.4, 82.0], [2.5, 82.0], [2.6, 82.0], [2.7, 83.0], [2.8, 83.0], [2.9, 83.0], [3.0, 83.0], [3.1, 84.0], [3.2, 84.0], [3.3, 84.0], [3.4, 84.0], [3.5, 84.0], [3.6, 84.0], [3.7, 85.0], [3.8, 85.0], [3.9, 85.0], [4.0, 85.0], [4.1, 85.0], [4.2, 85.0], [4.3, 85.0], [4.4, 85.0], [4.5, 85.0], [4.6, 85.0], [4.7, 86.0], [4.8, 86.0], [4.9, 86.0], [5.0, 86.0], [5.1, 86.0], [5.2, 87.0], [5.3, 87.0], [5.4, 87.0], [5.5, 87.0], [5.6, 87.0], [5.7, 87.0], [5.8, 87.0], [5.9, 88.0], [6.0, 88.0], [6.1, 88.0], [6.2, 89.0], [6.3, 89.0], [6.4, 89.0], [6.5, 89.0], [6.6, 89.0], [6.7, 89.0], [6.8, 89.0], [6.9, 90.0], [7.0, 90.0], [7.1, 90.0], [7.2, 90.0], [7.3, 90.0], [7.4, 92.0], [7.5, 93.0], [7.6, 93.0], [7.7, 93.0], [7.8, 93.0], [7.9, 93.0], [8.0, 93.0], [8.1, 94.0], [8.2, 94.0], [8.3, 94.0], [8.4, 95.0], [8.5, 95.0], [8.6, 95.0], [8.7, 95.0], [8.8, 95.0], [8.9, 95.0], [9.0, 95.0], [9.1, 96.0], [9.2, 96.0], [9.3, 96.0], [9.4, 96.0], [9.5, 96.0], [9.6, 96.0], [9.7, 97.0], [9.8, 97.0], [9.9, 97.0], [10.0, 98.0], [10.1, 98.0], [10.2, 98.0], [10.3, 98.0], [10.4, 99.0], [10.5, 99.0], [10.6, 100.0], [10.7, 100.0], [10.8, 100.0], [10.9, 100.0], [11.0, 100.0], [11.1, 101.0], [11.2, 102.0], [11.3, 102.0], [11.4, 103.0], [11.5, 103.0], [11.6, 103.0], [11.7, 103.0], [11.8, 103.0], [11.9, 104.0], [12.0, 104.0], [12.1, 104.0], [12.2, 105.0], [12.3, 106.0], [12.4, 106.0], [12.5, 106.0], [12.6, 106.0], [12.7, 107.0], [12.8, 107.0], [12.9, 108.0], [13.0, 108.0], [13.1, 108.0], [13.2, 108.0], [13.3, 108.0], [13.4, 109.0], [13.5, 109.0], [13.6, 110.0], [13.7, 110.0], [13.8, 110.0], [13.9, 111.0], [14.0, 111.0], [14.1, 111.0], [14.2, 111.0], [14.3, 111.0], [14.4, 112.0], [14.5, 112.0], [14.6, 112.0], [14.7, 113.0], [14.8, 114.0], [14.9, 114.0], [15.0, 114.0], [15.1, 114.0], [15.2, 115.0], [15.3, 115.0], [15.4, 115.0], [15.5, 115.0], [15.6, 116.0], [15.7, 116.0], [15.8, 116.0], [15.9, 116.0], [16.0, 116.0], [16.1, 117.0], [16.2, 117.0], [16.3, 118.0], [16.4, 118.0], [16.5, 118.0], [16.6, 118.0], [16.7, 118.0], [16.8, 119.0], [16.9, 119.0], [17.0, 119.0], [17.1, 119.0], [17.2, 119.0], [17.3, 119.0], [17.4, 120.0], [17.5, 120.0], [17.6, 120.0], [17.7, 121.0], [17.8, 121.0], [17.9, 121.0], [18.0, 122.0], [18.1, 123.0], [18.2, 123.0], [18.3, 123.0], [18.4, 123.0], [18.5, 123.0], [18.6, 124.0], [18.7, 124.0], [18.8, 125.0], [18.9, 125.0], [19.0, 126.0], [19.1, 126.0], [19.2, 126.0], [19.3, 126.0], [19.4, 126.0], [19.5, 127.0], [19.6, 128.0], [19.7, 128.0], [19.8, 128.0], [19.9, 129.0], [20.0, 129.0], [20.1, 129.0], [20.2, 130.0], [20.3, 130.0], [20.4, 131.0], [20.5, 131.0], [20.6, 131.0], [20.7, 132.0], [20.8, 133.0], [20.9, 133.0], [21.0, 133.0], [21.1, 134.0], [21.2, 135.0], [21.3, 137.0], [21.4, 140.0], [21.5, 141.0], [21.6, 142.0], [21.7, 143.0], [21.8, 143.0], [21.9, 143.0], [22.0, 143.0], [22.1, 144.0], [22.2, 144.0], [22.3, 144.0], [22.4, 144.0], [22.5, 146.0], [22.6, 146.0], [22.7, 147.0], [22.8, 149.0], [22.9, 151.0], [23.0, 154.0], [23.1, 154.0], [23.2, 154.0], [23.3, 155.0], [23.4, 155.0], [23.5, 155.0], [23.6, 156.0], [23.7, 156.0], [23.8, 156.0], [23.9, 157.0], [24.0, 157.0], [24.1, 158.0], [24.2, 158.0], [24.3, 158.0], [24.4, 158.0], [24.5, 159.0], [24.6, 159.0], [24.7, 159.0], [24.8, 159.0], [24.9, 159.0], [25.0, 160.0], [25.1, 160.0], [25.2, 162.0], [25.3, 162.0], [25.4, 163.0], [25.5, 163.0], [25.6, 163.0], [25.7, 166.0], [25.8, 166.0], [25.9, 166.0], [26.0, 166.0], [26.1, 167.0], [26.2, 167.0], [26.3, 167.0], [26.4, 168.0], [26.5, 169.0], [26.6, 169.0], [26.7, 170.0], [26.8, 172.0], [26.9, 172.0], [27.0, 173.0], [27.1, 173.0], [27.2, 173.0], [27.3, 174.0], [27.4, 174.0], [27.5, 175.0], [27.6, 175.0], [27.7, 175.0], [27.8, 175.0], [27.9, 175.0], [28.0, 176.0], [28.1, 176.0], [28.2, 176.0], [28.3, 176.0], [28.4, 177.0], [28.5, 177.0], [28.6, 177.0], [28.7, 177.0], [28.8, 177.0], [28.9, 180.0], [29.0, 180.0], [29.1, 180.0], [29.2, 181.0], [29.3, 181.0], [29.4, 181.0], [29.5, 182.0], [29.6, 182.0], [29.7, 182.0], [29.8, 183.0], [29.9, 183.0], [30.0, 183.0], [30.1, 183.0], [30.2, 184.0], [30.3, 184.0], [30.4, 184.0], [30.5, 184.0], [30.6, 184.0], [30.7, 184.0], [30.8, 184.0], [30.9, 184.0], [31.0, 185.0], [31.1, 185.0], [31.2, 185.0], [31.3, 185.0], [31.4, 185.0], [31.5, 185.0], [31.6, 186.0], [31.7, 186.0], [31.8, 186.0], [31.9, 186.0], [32.0, 186.0], [32.1, 186.0], [32.2, 186.0], [32.3, 186.0], [32.4, 188.0], [32.5, 188.0], [32.6, 188.0], [32.7, 188.0], [32.8, 189.0], [32.9, 189.0], [33.0, 189.0], [33.1, 189.0], [33.2, 189.0], [33.3, 190.0], [33.4, 190.0], [33.5, 190.0], [33.6, 190.0], [33.7, 190.0], [33.8, 190.0], [33.9, 190.0], [34.0, 190.0], [34.1, 191.0], [34.2, 191.0], [34.3, 191.0], [34.4, 191.0], [34.5, 192.0], [34.6, 192.0], [34.7, 192.0], [34.8, 192.0], [34.9, 192.0], [35.0, 192.0], [35.1, 193.0], [35.2, 193.0], [35.3, 193.0], [35.4, 193.0], [35.5, 193.0], [35.6, 194.0], [35.7, 194.0], [35.8, 194.0], [35.9, 194.0], [36.0, 194.0], [36.1, 194.0], [36.2, 195.0], [36.3, 195.0], [36.4, 195.0], [36.5, 195.0], [36.6, 196.0], [36.7, 196.0], [36.8, 196.0], [36.9, 196.0], [37.0, 196.0], [37.1, 196.0], [37.2, 197.0], [37.3, 197.0], [37.4, 197.0], [37.5, 197.0], [37.6, 198.0], [37.7, 198.0], [37.8, 198.0], [37.9, 198.0], [38.0, 198.0], [38.1, 198.0], [38.2, 198.0], [38.3, 199.0], [38.4, 199.0], [38.5, 199.0], [38.6, 199.0], [38.7, 200.0], [38.8, 200.0], [38.9, 200.0], [39.0, 200.0], [39.1, 200.0], [39.2, 200.0], [39.3, 200.0], [39.4, 200.0], [39.5, 201.0], [39.6, 201.0], [39.7, 201.0], [39.8, 201.0], [39.9, 201.0], [40.0, 201.0], [40.1, 201.0], [40.2, 201.0], [40.3, 202.0], [40.4, 202.0], [40.5, 202.0], [40.6, 202.0], [40.7, 202.0], [40.8, 202.0], [40.9, 202.0], [41.0, 202.0], [41.1, 202.0], [41.2, 202.0], [41.3, 203.0], [41.4, 203.0], [41.5, 203.0], [41.6, 203.0], [41.7, 203.0], [41.8, 203.0], [41.9, 203.0], [42.0, 204.0], [42.1, 204.0], [42.2, 204.0], [42.3, 204.0], [42.4, 204.0], [42.5, 204.0], [42.6, 204.0], [42.7, 204.0], [42.8, 204.0], [42.9, 205.0], [43.0, 205.0], [43.1, 205.0], [43.2, 205.0], [43.3, 205.0], [43.4, 205.0], [43.5, 205.0], [43.6, 205.0], [43.7, 206.0], [43.8, 206.0], [43.9, 206.0], [44.0, 206.0], [44.1, 206.0], [44.2, 206.0], [44.3, 207.0], [44.4, 207.0], [44.5, 207.0], [44.6, 207.0], [44.7, 207.0], [44.8, 207.0], [44.9, 207.0], [45.0, 207.0], [45.1, 208.0], [45.2, 208.0], [45.3, 208.0], [45.4, 208.0], [45.5, 208.0], [45.6, 208.0], [45.7, 208.0], [45.8, 208.0], [45.9, 208.0], [46.0, 208.0], [46.1, 209.0], [46.2, 209.0], [46.3, 209.0], [46.4, 209.0], [46.5, 209.0], [46.6, 209.0], [46.7, 209.0], [46.8, 209.0], [46.9, 209.0], [47.0, 209.0], [47.1, 209.0], [47.2, 210.0], [47.3, 210.0], [47.4, 210.0], [47.5, 210.0], [47.6, 210.0], [47.7, 211.0], [47.8, 211.0], [47.9, 211.0], [48.0, 211.0], [48.1, 211.0], [48.2, 211.0], [48.3, 211.0], [48.4, 211.0], [48.5, 211.0], [48.6, 211.0], [48.7, 211.0], [48.8, 211.0], [48.9, 211.0], [49.0, 211.0], [49.1, 212.0], [49.2, 212.0], [49.3, 212.0], [49.4, 213.0], [49.5, 213.0], [49.6, 213.0], [49.7, 213.0], [49.8, 213.0], [49.9, 213.0], [50.0, 213.0], [50.1, 213.0], [50.2, 213.0], [50.3, 213.0], [50.4, 213.0], [50.5, 214.0], [50.6, 214.0], [50.7, 214.0], [50.8, 214.0], [50.9, 214.0], [51.0, 215.0], [51.1, 215.0], [51.2, 215.0], [51.3, 215.0], [51.4, 216.0], [51.5, 216.0], [51.6, 216.0], [51.7, 216.0], [51.8, 216.0], [51.9, 217.0], [52.0, 217.0], [52.1, 217.0], [52.2, 217.0], [52.3, 217.0], [52.4, 217.0], [52.5, 218.0], [52.6, 218.0], [52.7, 218.0], [52.8, 218.0], [52.9, 218.0], [53.0, 219.0], [53.1, 219.0], [53.2, 219.0], [53.3, 219.0], [53.4, 219.0], [53.5, 219.0], [53.6, 219.0], [53.7, 219.0], [53.8, 220.0], [53.9, 220.0], [54.0, 220.0], [54.1, 220.0], [54.2, 220.0], [54.3, 221.0], [54.4, 221.0], [54.5, 221.0], [54.6, 222.0], [54.7, 222.0], [54.8, 222.0], [54.9, 222.0], [55.0, 222.0], [55.1, 223.0], [55.2, 223.0], [55.3, 223.0], [55.4, 223.0], [55.5, 223.0], [55.6, 223.0], [55.7, 223.0], [55.8, 223.0], [55.9, 223.0], [56.0, 223.0], [56.1, 223.0], [56.2, 224.0], [56.3, 224.0], [56.4, 224.0], [56.5, 224.0], [56.6, 225.0], [56.7, 225.0], [56.8, 225.0], [56.9, 225.0], [57.0, 225.0], [57.1, 225.0], [57.2, 225.0], [57.3, 226.0], [57.4, 226.0], [57.5, 226.0], [57.6, 226.0], [57.7, 227.0], [57.8, 227.0], [57.9, 227.0], [58.0, 227.0], [58.1, 227.0], [58.2, 227.0], [58.3, 227.0], [58.4, 227.0], [58.5, 228.0], [58.6, 228.0], [58.7, 228.0], [58.8, 228.0], [58.9, 229.0], [59.0, 229.0], [59.1, 229.0], [59.2, 229.0], [59.3, 229.0], [59.4, 229.0], [59.5, 230.0], [59.6, 230.0], [59.7, 230.0], [59.8, 230.0], [59.9, 231.0], [60.0, 231.0], [60.1, 232.0], [60.2, 232.0], [60.3, 232.0], [60.4, 232.0], [60.5, 232.0], [60.6, 233.0], [60.7, 234.0], [60.8, 234.0], [60.9, 234.0], [61.0, 234.0], [61.1, 234.0], [61.2, 235.0], [61.3, 235.0], [61.4, 235.0], [61.5, 235.0], [61.6, 235.0], [61.7, 235.0], [61.8, 236.0], [61.9, 236.0], [62.0, 237.0], [62.1, 238.0], [62.2, 238.0], [62.3, 238.0], [62.4, 238.0], [62.5, 239.0], [62.6, 239.0], [62.7, 239.0], [62.8, 239.0], [62.9, 240.0], [63.0, 240.0], [63.1, 240.0], [63.2, 240.0], [63.3, 240.0], [63.4, 240.0], [63.5, 241.0], [63.6, 241.0], [63.7, 241.0], [63.8, 241.0], [63.9, 242.0], [64.0, 242.0], [64.1, 242.0], [64.2, 242.0], [64.3, 242.0], [64.4, 242.0], [64.5, 242.0], [64.6, 243.0], [64.7, 243.0], [64.8, 243.0], [64.9, 243.0], [65.0, 243.0], [65.1, 243.0], [65.2, 243.0], [65.3, 245.0], [65.4, 245.0], [65.5, 245.0], [65.6, 245.0], [65.7, 245.0], [65.8, 246.0], [65.9, 246.0], [66.0, 246.0], [66.1, 246.0], [66.2, 246.0], [66.3, 246.0], [66.4, 246.0], [66.5, 247.0], [66.6, 247.0], [66.7, 247.0], [66.8, 247.0], [66.9, 247.0], [67.0, 247.0], [67.1, 247.0], [67.2, 247.0], [67.3, 248.0], [67.4, 248.0], [67.5, 248.0], [67.6, 248.0], [67.7, 249.0], [67.8, 249.0], [67.9, 249.0], [68.0, 249.0], [68.1, 249.0], [68.2, 250.0], [68.3, 250.0], [68.4, 250.0], [68.5, 250.0], [68.6, 250.0], [68.7, 250.0], [68.8, 251.0], [68.9, 251.0], [69.0, 251.0], [69.1, 252.0], [69.2, 252.0], [69.3, 253.0], [69.4, 253.0], [69.5, 253.0], [69.6, 253.0], [69.7, 253.0], [69.8, 253.0], [69.9, 254.0], [70.0, 254.0], [70.1, 254.0], [70.2, 254.0], [70.3, 254.0], [70.4, 255.0], [70.5, 255.0], [70.6, 255.0], [70.7, 255.0], [70.8, 255.0], [70.9, 255.0], [71.0, 256.0], [71.1, 256.0], [71.2, 256.0], [71.3, 256.0], [71.4, 256.0], [71.5, 256.0], [71.6, 256.0], [71.7, 256.0], [71.8, 256.0], [71.9, 257.0], [72.0, 257.0], [72.1, 257.0], [72.2, 257.0], [72.3, 257.0], [72.4, 258.0], [72.5, 258.0], [72.6, 258.0], [72.7, 258.0], [72.8, 258.0], [72.9, 258.0], [73.0, 259.0], [73.1, 259.0], [73.2, 259.0], [73.3, 259.0], [73.4, 259.0], [73.5, 260.0], [73.6, 260.0], [73.7, 260.0], [73.8, 260.0], [73.9, 261.0], [74.0, 261.0], [74.1, 261.0], [74.2, 261.0], [74.3, 261.0], [74.4, 261.0], [74.5, 262.0], [74.6, 262.0], [74.7, 262.0], [74.8, 263.0], [74.9, 263.0], [75.0, 263.0], [75.1, 264.0], [75.2, 264.0], [75.3, 264.0], [75.4, 264.0], [75.5, 264.0], [75.6, 264.0], [75.7, 265.0], [75.8, 265.0], [75.9, 265.0], [76.0, 265.0], [76.1, 265.0], [76.2, 265.0], [76.3, 265.0], [76.4, 266.0], [76.5, 266.0], [76.6, 266.0], [76.7, 266.0], [76.8, 266.0], [76.9, 267.0], [77.0, 267.0], [77.1, 267.0], [77.2, 267.0], [77.3, 267.0], [77.4, 267.0], [77.5, 268.0], [77.6, 268.0], [77.7, 268.0], [77.8, 268.0], [77.9, 269.0], [78.0, 269.0], [78.1, 269.0], [78.2, 269.0], [78.3, 269.0], [78.4, 269.0], [78.5, 269.0], [78.6, 270.0], [78.7, 270.0], [78.8, 270.0], [78.9, 270.0], [79.0, 271.0], [79.1, 272.0], [79.2, 272.0], [79.3, 272.0], [79.4, 272.0], [79.5, 272.0], [79.6, 273.0], [79.7, 273.0], [79.8, 273.0], [79.9, 273.0], [80.0, 273.0], [80.1, 273.0], [80.2, 274.0], [80.3, 274.0], [80.4, 274.0], [80.5, 274.0], [80.6, 274.0], [80.7, 274.0], [80.8, 274.0], [80.9, 275.0], [81.0, 275.0], [81.1, 275.0], [81.2, 275.0], [81.3, 275.0], [81.4, 275.0], [81.5, 276.0], [81.6, 276.0], [81.7, 276.0], [81.8, 276.0], [81.9, 277.0], [82.0, 277.0], [82.1, 277.0], [82.2, 277.0], [82.3, 277.0], [82.4, 278.0], [82.5, 278.0], [82.6, 278.0], [82.7, 278.0], [82.8, 278.0], [82.9, 278.0], [83.0, 278.0], [83.1, 278.0], [83.2, 278.0], [83.3, 279.0], [83.4, 279.0], [83.5, 280.0], [83.6, 280.0], [83.7, 280.0], [83.8, 280.0], [83.9, 281.0], [84.0, 281.0], [84.1, 281.0], [84.2, 282.0], [84.3, 282.0], [84.4, 282.0], [84.5, 283.0], [84.6, 284.0], [84.7, 285.0], [84.8, 285.0], [84.9, 285.0], [85.0, 285.0], [85.1, 286.0], [85.2, 286.0], [85.3, 286.0], [85.4, 286.0], [85.5, 287.0], [85.6, 287.0], [85.7, 287.0], [85.8, 289.0], [85.9, 289.0], [86.0, 290.0], [86.1, 290.0], [86.2, 291.0], [86.3, 291.0], [86.4, 292.0], [86.5, 292.0], [86.6, 293.0], [86.7, 293.0], [86.8, 294.0], [86.9, 294.0], [87.0, 294.0], [87.1, 296.0], [87.2, 297.0], [87.3, 298.0], [87.4, 298.0], [87.5, 298.0], [87.6, 299.0], [87.7, 300.0], [87.8, 302.0], [87.9, 306.0], [88.0, 306.0], [88.1, 306.0], [88.2, 307.0], [88.3, 308.0], [88.4, 317.0], [88.5, 318.0], [88.6, 319.0], [88.7, 322.0], [88.8, 322.0], [88.9, 323.0], [89.0, 324.0], [89.1, 325.0], [89.2, 327.0], [89.3, 327.0], [89.4, 331.0], [89.5, 335.0], [89.6, 335.0], [89.7, 335.0], [89.8, 337.0], [89.9, 341.0], [90.0, 341.0], [90.1, 342.0], [90.2, 342.0], [90.3, 342.0], [90.4, 346.0], [90.5, 346.0], [90.6, 346.0], [90.7, 348.0], [90.8, 349.0], [90.9, 358.0], [91.0, 359.0], [91.1, 360.0], [91.2, 365.0], [91.3, 376.0], [91.4, 378.0], [91.5, 381.0], [91.6, 382.0], [91.7, 383.0], [91.8, 388.0], [91.9, 389.0], [92.0, 396.0], [92.1, 397.0], [92.2, 397.0], [92.3, 400.0], [92.4, 417.0], [92.5, 425.0], [92.6, 432.0], [92.7, 438.0], [92.8, 447.0], [92.9, 450.0], [93.0, 453.0], [93.1, 461.0], [93.2, 464.0], [93.3, 464.0], [93.4, 465.0], [93.5, 467.0], [93.6, 471.0], [93.7, 472.0], [93.8, 475.0], [93.9, 479.0], [94.0, 480.0], [94.1, 484.0], [94.2, 500.0], [94.3, 572.0], [94.4, 573.0], [94.5, 622.0], [94.6, 826.0], [94.7, 1016.0], [94.8, 1173.0], [94.9, 1198.0], [95.0, 1217.0], [95.1, 1274.0], [95.2, 1614.0], [95.3, 1719.0], [95.4, 1820.0], [95.5, 1920.0], [95.6, 2015.0], [95.7, 2205.0], [95.8, 2316.0], [95.9, 2433.0], [96.0, 2517.0], [96.1, 2572.0], [96.2, 2675.0], [96.3, 2922.0], [96.4, 3072.0], [96.5, 3120.0], [96.6, 3214.0], [96.7, 3409.0], [96.8, 3473.0], [96.9, 3575.0], [97.0, 3719.0], [97.1, 3819.0], [97.2, 3874.0], [97.3, 3973.0], [97.4, 4173.0], [97.5, 4303.0], [97.6, 4416.0], [97.7, 4472.0], [97.8, 4603.0], [97.9, 4874.0], [98.0, 4901.0], [98.1, 5015.0], [98.2, 5117.0], [98.3, 5217.0], [98.4, 5373.0], [98.5, 5473.0], [98.6, 5678.0], [98.7, 5698.0], [98.8, 5817.0], [98.9, 5872.0], [99.0, 5991.0], [99.1, 5992.0], [99.2, 6132.0], [99.3, 6133.0], [99.4, 6133.0], [99.5, 6138.0], [99.6, 6139.0], [99.7, 6141.0], [99.8, 6192.0], [99.9, 6204.0], [100.0, 6225.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 581.0, "series": [{"data": [[0.0, 125.0], [600.0, 1.0], [800.0, 1.0], [1000.0, 2.0], [1100.0, 2.0], [1200.0, 2.0], [1300.0, 1.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2300.0, 2.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3400.0, 3.0], [3500.0, 1.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4400.0, 2.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5100.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 2.0], [5400.0, 1.0], [5800.0, 2.0], [5900.0, 3.0], [6100.0, 8.0], [6200.0, 2.0], [100.0, 334.0], [200.0, 581.0], [300.0, 55.0], [400.0, 23.0], [500.0, 3.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1119.0, "series": [{"data": [[0.0, 1119.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 57.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 89.23241590214063, "minX": 1.77822858E12, "maxY": 93.79186046511622, "series": [{"data": [[1.77822864E12, 93.79186046511622], [1.77822858E12, 89.23241590214063]], "isOverall": false, "label": "LTI 1.1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822864E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 80.0, "minX": 2.0, "maxY": 3435.436363636364, "series": [{"data": [[2.0, 83.0], [3.0, 82.0], [4.0, 82.0], [5.0, 80.0], [6.0, 89.0], [7.0, 82.0], [10.0, 84.0], [11.0, 84.0], [12.0, 82.0], [14.0, 81.5], [15.0, 80.0], [16.0, 80.0], [18.0, 81.5], [20.0, 81.5], [23.0, 108.0], [27.0, 152.75], [29.0, 223.5], [31.0, 245.5], [32.0, 243.0], [35.0, 242.0], [34.0, 211.5], [37.0, 182.0], [36.0, 186.0], [39.0, 142.5], [41.0, 157.0], [43.0, 224.0], [42.0, 241.0], [45.0, 248.5], [47.0, 217.0], [46.0, 270.0], [49.0, 238.0], [51.0, 238.0], [53.0, 232.5], [55.0, 203.0], [57.0, 202.0], [59.0, 253.5], [60.0, 189.0], [63.0, 246.33333333333334], [67.0, 181.0], [66.0, 232.0], [65.0, 240.0], [71.0, 3264.3529411764707], [69.0, 130.0], [73.0, 3435.436363636364], [74.0, 550.2058823529411], [75.0, 179.07692307692307], [76.0, 201.0], [77.0, 170.0], [78.0, 322.0], [79.0, 201.875], [80.0, 350.5], [81.0, 133.86363636363635], [82.0, 240.14285714285714], [83.0, 309.0], [84.0, 159.0], [85.0, 154.0], [86.0, 241.0], [87.0, 206.16666666666669], [88.0, 272.5], [90.0, 280.0], [91.0, 328.5], [92.0, 251.7142857142857], [93.0, 339.0], [94.0, 287.75], [95.0, 283.25], [96.0, 305.3333333333333], [97.0, 342.5], [98.0, 319.6666666666667], [99.0, 347.5], [100.0, 209.35274725274735]], "isOverall": false, "label": "Lanzamiento", "isController": false}, {"data": [[92.53580454928388, 411.1432181971356]], "isOverall": false, "label": "Lanzamiento-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 621.3, "minX": 1.77822858E12, "maxY": 8347.266666666666, "series": [{"data": [[1.77822864E12, 1634.0], [1.77822858E12, 621.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77822864E12, 8347.266666666666], [1.77822858E12, 3174.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822864E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 196.8372093023256, "minX": 1.77822858E12, "maxY": 974.761467889908, "series": [{"data": [[1.77822864E12, 196.8372093023256], [1.77822858E12, 974.761467889908]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822864E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 196.8348837209301, "minX": 1.77822858E12, "maxY": 974.5290519877673, "series": [{"data": [[1.77822864E12, 196.8348837209301], [1.77822858E12, 974.5290519877673]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822864E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77822858E12, "maxY": 728.9847094801232, "series": [{"data": [[1.77822864E12, 0.0], [1.77822858E12, 728.9847094801232]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822864E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.77822858E12, "maxY": 6225.0, "series": [{"data": [[1.77822864E12, 467.0], [1.77822858E12, 6225.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77822864E12, 80.0], [1.77822858E12, 80.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77822864E12, 273.0], [1.77822858E12, 3980.5999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77822864E12, 371.62999999999977], [1.77822858E12, 6177.719999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77822864E12, 205.5], [1.77822858E12, 257.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77822864E12, 281.0], [1.77822858E12, 5689.999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822864E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 85.0, "minX": 9.0, "maxY": 2256.0, "series": [{"data": [[35.0, 85.0], [9.0, 203.0], [10.0, 259.0], [44.0, 154.0], [46.0, 185.0], [12.0, 228.5], [48.0, 235.0], [13.0, 209.0], [14.0, 236.5], [15.0, 228.5], [16.0, 221.0], [17.0, 232.0], [20.0, 375.0], [102.0, 2256.0], [27.0, 223.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 85.0, "minX": 9.0, "maxY": 2256.0, "series": [{"data": [[35.0, 85.0], [9.0, 203.0], [10.0, 259.0], [44.0, 154.0], [46.0, 185.0], [12.0, 228.5], [48.0, 235.0], [13.0, 209.0], [14.0, 236.5], [15.0, 228.5], [16.0, 221.0], [17.0, 232.0], [20.0, 375.0], [102.0, 2256.0], [27.0, 223.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.466666666666667, "minX": 1.77822858E12, "maxY": 14.316666666666666, "series": [{"data": [[1.77822864E12, 14.316666666666666], [1.77822858E12, 5.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822864E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.77822858E12, "maxY": 14.333333333333334, "series": [{"data": [[1.77822864E12, 14.333333333333334], [1.77822858E12, 5.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77822864E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.77822858E12, "maxY": 14.333333333333334, "series": [{"data": [[1.77822864E12, 14.333333333333334], [1.77822858E12, 5.45]], "isOverall": false, "label": "Lanzamiento-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822864E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.45, "minX": 1.77822858E12, "maxY": 14.333333333333334, "series": [{"data": [[1.77822864E12, 14.333333333333334], [1.77822858E12, 5.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77822864E12, "title": "Total Transactions Per Second"}},
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

