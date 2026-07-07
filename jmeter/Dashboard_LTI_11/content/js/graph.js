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
        data: {"result": {"minY": 85.0, "minX": 0.0, "maxY": 60112.0, "series": [{"data": [[0.0, 85.0], [0.1, 86.0], [0.2, 87.0], [0.3, 87.0], [0.4, 88.0], [0.5, 88.0], [0.6, 90.0], [0.7, 91.0], [0.8, 91.0], [0.9, 92.0], [1.0, 92.0], [1.1, 93.0], [1.2, 93.0], [1.3, 93.0], [1.4, 94.0], [1.5, 94.0], [1.6, 95.0], [1.7, 95.0], [1.8, 95.0], [1.9, 96.0], [2.0, 96.0], [2.1, 96.0], [2.2, 97.0], [2.3, 97.0], [2.4, 97.0], [2.5, 98.0], [2.6, 98.0], [2.7, 99.0], [2.8, 99.0], [2.9, 99.0], [3.0, 100.0], [3.1, 101.0], [3.2, 102.0], [3.3, 103.0], [3.4, 103.0], [3.5, 104.0], [3.6, 105.0], [3.7, 107.0], [3.8, 108.0], [3.9, 109.0], [4.0, 111.0], [4.1, 112.0], [4.2, 113.0], [4.3, 115.0], [4.4, 117.0], [4.5, 119.0], [4.6, 122.0], [4.7, 124.0], [4.8, 125.0], [4.9, 127.0], [5.0, 128.0], [5.1, 129.0], [5.2, 129.0], [5.3, 131.0], [5.4, 133.0], [5.5, 134.0], [5.6, 134.0], [5.7, 136.0], [5.8, 136.0], [5.9, 137.0], [6.0, 138.0], [6.1, 139.0], [6.2, 139.0], [6.3, 140.0], [6.4, 141.0], [6.5, 142.0], [6.6, 142.0], [6.7, 143.0], [6.8, 144.0], [6.9, 144.0], [7.0, 145.0], [7.1, 145.0], [7.2, 146.0], [7.3, 146.0], [7.4, 147.0], [7.5, 147.0], [7.6, 148.0], [7.7, 149.0], [7.8, 149.0], [7.9, 149.0], [8.0, 150.0], [8.1, 150.0], [8.2, 150.0], [8.3, 151.0], [8.4, 151.0], [8.5, 152.0], [8.6, 152.0], [8.7, 153.0], [8.8, 154.0], [8.9, 154.0], [9.0, 154.0], [9.1, 155.0], [9.2, 155.0], [9.3, 156.0], [9.4, 156.0], [9.5, 157.0], [9.6, 157.0], [9.7, 158.0], [9.8, 158.0], [9.9, 159.0], [10.0, 160.0], [10.1, 161.0], [10.2, 161.0], [10.3, 162.0], [10.4, 162.0], [10.5, 164.0], [10.6, 166.0], [10.7, 166.0], [10.8, 168.0], [10.9, 169.0], [11.0, 170.0], [11.1, 171.0], [11.2, 172.0], [11.3, 174.0], [11.4, 175.0], [11.5, 176.0], [11.6, 177.0], [11.7, 179.0], [11.8, 179.0], [11.9, 180.0], [12.0, 181.0], [12.1, 181.0], [12.2, 182.0], [12.3, 183.0], [12.4, 184.0], [12.5, 184.0], [12.6, 185.0], [12.7, 186.0], [12.8, 186.0], [12.9, 187.0], [13.0, 188.0], [13.1, 188.0], [13.2, 189.0], [13.3, 189.0], [13.4, 190.0], [13.5, 190.0], [13.6, 191.0], [13.7, 191.0], [13.8, 192.0], [13.9, 192.0], [14.0, 193.0], [14.1, 193.0], [14.2, 194.0], [14.3, 194.0], [14.4, 194.0], [14.5, 195.0], [14.6, 195.0], [14.7, 195.0], [14.8, 196.0], [14.9, 196.0], [15.0, 196.0], [15.1, 197.0], [15.2, 197.0], [15.3, 197.0], [15.4, 198.0], [15.5, 198.0], [15.6, 198.0], [15.7, 198.0], [15.8, 198.0], [15.9, 199.0], [16.0, 199.0], [16.1, 199.0], [16.2, 199.0], [16.3, 199.0], [16.4, 199.0], [16.5, 200.0], [16.6, 200.0], [16.7, 200.0], [16.8, 200.0], [16.9, 200.0], [17.0, 200.0], [17.1, 200.0], [17.2, 200.0], [17.3, 201.0], [17.4, 201.0], [17.5, 201.0], [17.6, 201.0], [17.7, 201.0], [17.8, 201.0], [17.9, 201.0], [18.0, 201.0], [18.1, 201.0], [18.2, 202.0], [18.3, 202.0], [18.4, 202.0], [18.5, 202.0], [18.6, 202.0], [18.7, 202.0], [18.8, 202.0], [18.9, 202.0], [19.0, 202.0], [19.1, 202.0], [19.2, 203.0], [19.3, 203.0], [19.4, 203.0], [19.5, 203.0], [19.6, 203.0], [19.7, 203.0], [19.8, 203.0], [19.9, 203.0], [20.0, 203.0], [20.1, 203.0], [20.2, 203.0], [20.3, 204.0], [20.4, 204.0], [20.5, 204.0], [20.6, 204.0], [20.7, 204.0], [20.8, 204.0], [20.9, 204.0], [21.0, 204.0], [21.1, 204.0], [21.2, 204.0], [21.3, 204.0], [21.4, 204.0], [21.5, 204.0], [21.6, 204.0], [21.7, 205.0], [21.8, 205.0], [21.9, 205.0], [22.0, 205.0], [22.1, 205.0], [22.2, 205.0], [22.3, 205.0], [22.4, 205.0], [22.5, 205.0], [22.6, 205.0], [22.7, 205.0], [22.8, 206.0], [22.9, 206.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 206.0], [23.4, 206.0], [23.5, 206.0], [23.6, 206.0], [23.7, 206.0], [23.8, 206.0], [23.9, 207.0], [24.0, 207.0], [24.1, 207.0], [24.2, 207.0], [24.3, 207.0], [24.4, 207.0], [24.5, 207.0], [24.6, 208.0], [24.7, 208.0], [24.8, 208.0], [24.9, 208.0], [25.0, 208.0], [25.1, 208.0], [25.2, 209.0], [25.3, 209.0], [25.4, 209.0], [25.5, 209.0], [25.6, 209.0], [25.7, 210.0], [25.8, 210.0], [25.9, 210.0], [26.0, 210.0], [26.1, 211.0], [26.2, 211.0], [26.3, 211.0], [26.4, 212.0], [26.5, 213.0], [26.6, 213.0], [26.7, 214.0], [26.8, 215.0], [26.9, 216.0], [27.0, 217.0], [27.1, 218.0], [27.2, 218.0], [27.3, 219.0], [27.4, 219.0], [27.5, 220.0], [27.6, 221.0], [27.7, 222.0], [27.8, 223.0], [27.9, 226.0], [28.0, 227.0], [28.1, 227.0], [28.2, 228.0], [28.3, 228.0], [28.4, 230.0], [28.5, 231.0], [28.6, 232.0], [28.7, 233.0], [28.8, 234.0], [28.9, 235.0], [29.0, 236.0], [29.1, 237.0], [29.2, 238.0], [29.3, 238.0], [29.4, 239.0], [29.5, 240.0], [29.6, 240.0], [29.7, 241.0], [29.8, 241.0], [29.9, 242.0], [30.0, 242.0], [30.1, 243.0], [30.2, 243.0], [30.3, 244.0], [30.4, 244.0], [30.5, 245.0], [30.6, 245.0], [30.7, 245.0], [30.8, 246.0], [30.9, 246.0], [31.0, 246.0], [31.1, 247.0], [31.2, 247.0], [31.3, 247.0], [31.4, 248.0], [31.5, 248.0], [31.6, 248.0], [31.7, 249.0], [31.8, 249.0], [31.9, 249.0], [32.0, 250.0], [32.1, 250.0], [32.2, 250.0], [32.3, 251.0], [32.4, 251.0], [32.5, 251.0], [32.6, 251.0], [32.7, 252.0], [32.8, 252.0], [32.9, 252.0], [33.0, 252.0], [33.1, 253.0], [33.2, 253.0], [33.3, 253.0], [33.4, 253.0], [33.5, 254.0], [33.6, 254.0], [33.7, 254.0], [33.8, 254.0], [33.9, 254.0], [34.0, 255.0], [34.1, 255.0], [34.2, 255.0], [34.3, 255.0], [34.4, 255.0], [34.5, 256.0], [34.6, 256.0], [34.7, 256.0], [34.8, 256.0], [34.9, 256.0], [35.0, 256.0], [35.1, 257.0], [35.2, 257.0], [35.3, 257.0], [35.4, 257.0], [35.5, 258.0], [35.6, 258.0], [35.7, 258.0], [35.8, 258.0], [35.9, 258.0], [36.0, 259.0], [36.1, 259.0], [36.2, 259.0], [36.3, 259.0], [36.4, 260.0], [36.5, 260.0], [36.6, 260.0], [36.7, 260.0], [36.8, 260.0], [36.9, 261.0], [37.0, 261.0], [37.1, 261.0], [37.2, 261.0], [37.3, 261.0], [37.4, 262.0], [37.5, 262.0], [37.6, 262.0], [37.7, 263.0], [37.8, 263.0], [37.9, 263.0], [38.0, 264.0], [38.1, 264.0], [38.2, 264.0], [38.3, 264.0], [38.4, 265.0], [38.5, 265.0], [38.6, 265.0], [38.7, 265.0], [38.8, 266.0], [38.9, 266.0], [39.0, 266.0], [39.1, 267.0], [39.2, 267.0], [39.3, 268.0], [39.4, 269.0], [39.5, 269.0], [39.6, 270.0], [39.7, 270.0], [39.8, 271.0], [39.9, 272.0], [40.0, 274.0], [40.1, 276.0], [40.2, 278.0], [40.3, 279.0], [40.4, 280.0], [40.5, 281.0], [40.6, 281.0], [40.7, 282.0], [40.8, 284.0], [40.9, 286.0], [41.0, 288.0], [41.1, 289.0], [41.2, 290.0], [41.3, 291.0], [41.4, 291.0], [41.5, 291.0], [41.6, 292.0], [41.7, 293.0], [41.8, 293.0], [41.9, 294.0], [42.0, 294.0], [42.1, 294.0], [42.2, 295.0], [42.3, 295.0], [42.4, 295.0], [42.5, 295.0], [42.6, 295.0], [42.7, 296.0], [42.8, 296.0], [42.9, 296.0], [43.0, 296.0], [43.1, 296.0], [43.2, 296.0], [43.3, 297.0], [43.4, 297.0], [43.5, 297.0], [43.6, 297.0], [43.7, 297.0], [43.8, 297.0], [43.9, 297.0], [44.0, 297.0], [44.1, 297.0], [44.2, 298.0], [44.3, 298.0], [44.4, 298.0], [44.5, 298.0], [44.6, 298.0], [44.7, 298.0], [44.8, 298.0], [44.9, 298.0], [45.0, 298.0], [45.1, 298.0], [45.2, 298.0], [45.3, 298.0], [45.4, 299.0], [45.5, 299.0], [45.6, 299.0], [45.7, 299.0], [45.8, 299.0], [45.9, 299.0], [46.0, 299.0], [46.1, 299.0], [46.2, 299.0], [46.3, 299.0], [46.4, 299.0], [46.5, 299.0], [46.6, 299.0], [46.7, 299.0], [46.8, 300.0], [46.9, 300.0], [47.0, 300.0], [47.1, 300.0], [47.2, 300.0], [47.3, 300.0], [47.4, 300.0], [47.5, 300.0], [47.6, 300.0], [47.7, 300.0], [47.8, 300.0], [47.9, 300.0], [48.0, 300.0], [48.1, 300.0], [48.2, 300.0], [48.3, 300.0], [48.4, 301.0], [48.5, 301.0], [48.6, 301.0], [48.7, 301.0], [48.8, 301.0], [48.9, 301.0], [49.0, 301.0], [49.1, 301.0], [49.2, 301.0], [49.3, 301.0], [49.4, 301.0], [49.5, 301.0], [49.6, 301.0], [49.7, 301.0], [49.8, 301.0], [49.9, 301.0], [50.0, 301.0], [50.1, 301.0], [50.2, 301.0], [50.3, 301.0], [50.4, 301.0], [50.5, 302.0], [50.6, 302.0], [50.7, 302.0], [50.8, 302.0], [50.9, 302.0], [51.0, 302.0], [51.1, 302.0], [51.2, 302.0], [51.3, 302.0], [51.4, 302.0], [51.5, 302.0], [51.6, 302.0], [51.7, 302.0], [51.8, 302.0], [51.9, 302.0], [52.0, 302.0], [52.1, 302.0], [52.2, 302.0], [52.3, 302.0], [52.4, 302.0], [52.5, 302.0], [52.6, 302.0], [52.7, 302.0], [52.8, 302.0], [52.9, 303.0], [53.0, 303.0], [53.1, 303.0], [53.2, 303.0], [53.3, 303.0], [53.4, 303.0], [53.5, 303.0], [53.6, 303.0], [53.7, 303.0], [53.8, 303.0], [53.9, 303.0], [54.0, 303.0], [54.1, 303.0], [54.2, 303.0], [54.3, 303.0], [54.4, 303.0], [54.5, 303.0], [54.6, 303.0], [54.7, 303.0], [54.8, 303.0], [54.9, 303.0], [55.0, 303.0], [55.1, 303.0], [55.2, 303.0], [55.3, 303.0], [55.4, 303.0], [55.5, 303.0], [55.6, 303.0], [55.7, 304.0], [55.8, 304.0], [55.9, 304.0], [56.0, 304.0], [56.1, 304.0], [56.2, 304.0], [56.3, 304.0], [56.4, 304.0], [56.5, 304.0], [56.6, 304.0], [56.7, 304.0], [56.8, 304.0], [56.9, 304.0], [57.0, 304.0], [57.1, 304.0], [57.2, 304.0], [57.3, 304.0], [57.4, 304.0], [57.5, 304.0], [57.6, 304.0], [57.7, 304.0], [57.8, 304.0], [57.9, 304.0], [58.0, 304.0], [58.1, 304.0], [58.2, 304.0], [58.3, 304.0], [58.4, 304.0], [58.5, 304.0], [58.6, 304.0], [58.7, 304.0], [58.8, 304.0], [58.9, 305.0], [59.0, 305.0], [59.1, 305.0], [59.2, 305.0], [59.3, 305.0], [59.4, 305.0], [59.5, 305.0], [59.6, 305.0], [59.7, 305.0], [59.8, 305.0], [59.9, 305.0], [60.0, 305.0], [60.1, 305.0], [60.2, 305.0], [60.3, 305.0], [60.4, 305.0], [60.5, 305.0], [60.6, 305.0], [60.7, 305.0], [60.8, 305.0], [60.9, 305.0], [61.0, 305.0], [61.1, 305.0], [61.2, 305.0], [61.3, 305.0], [61.4, 305.0], [61.5, 305.0], [61.6, 305.0], [61.7, 305.0], [61.8, 305.0], [61.9, 305.0], [62.0, 305.0], [62.1, 305.0], [62.2, 305.0], [62.3, 306.0], [62.4, 306.0], [62.5, 306.0], [62.6, 306.0], [62.7, 306.0], [62.8, 306.0], [62.9, 306.0], [63.0, 306.0], [63.1, 306.0], [63.2, 306.0], [63.3, 306.0], [63.4, 306.0], [63.5, 306.0], [63.6, 306.0], [63.7, 306.0], [63.8, 306.0], [63.9, 306.0], [64.0, 306.0], [64.1, 306.0], [64.2, 306.0], [64.3, 306.0], [64.4, 306.0], [64.5, 306.0], [64.6, 306.0], [64.7, 306.0], [64.8, 306.0], [64.9, 306.0], [65.0, 306.0], [65.1, 306.0], [65.2, 306.0], [65.3, 306.0], [65.4, 306.0], [65.5, 306.0], [65.6, 306.0], [65.7, 307.0], [65.8, 307.0], [65.9, 307.0], [66.0, 307.0], [66.1, 307.0], [66.2, 307.0], [66.3, 307.0], [66.4, 307.0], [66.5, 307.0], [66.6, 307.0], [66.7, 307.0], [66.8, 307.0], [66.9, 307.0], [67.0, 307.0], [67.1, 307.0], [67.2, 307.0], [67.3, 307.0], [67.4, 307.0], [67.5, 307.0], [67.6, 307.0], [67.7, 307.0], [67.8, 307.0], [67.9, 307.0], [68.0, 307.0], [68.1, 307.0], [68.2, 307.0], [68.3, 307.0], [68.4, 307.0], [68.5, 307.0], [68.6, 307.0], [68.7, 307.0], [68.8, 307.0], [68.9, 307.0], [69.0, 307.0], [69.1, 307.0], [69.2, 308.0], [69.3, 308.0], [69.4, 308.0], [69.5, 308.0], [69.6, 308.0], [69.7, 308.0], [69.8, 308.0], [69.9, 308.0], [70.0, 308.0], [70.1, 308.0], [70.2, 308.0], [70.3, 308.0], [70.4, 308.0], [70.5, 308.0], [70.6, 308.0], [70.7, 308.0], [70.8, 308.0], [70.9, 308.0], [71.0, 308.0], [71.1, 308.0], [71.2, 308.0], [71.3, 308.0], [71.4, 308.0], [71.5, 308.0], [71.6, 308.0], [71.7, 309.0], [71.8, 309.0], [71.9, 309.0], [72.0, 309.0], [72.1, 309.0], [72.2, 309.0], [72.3, 309.0], [72.4, 309.0], [72.5, 309.0], [72.6, 309.0], [72.7, 309.0], [72.8, 309.0], [72.9, 309.0], [73.0, 309.0], [73.1, 309.0], [73.2, 309.0], [73.3, 309.0], [73.4, 309.0], [73.5, 309.0], [73.6, 309.0], [73.7, 309.0], [73.8, 309.0], [73.9, 310.0], [74.0, 310.0], [74.1, 310.0], [74.2, 310.0], [74.3, 310.0], [74.4, 310.0], [74.5, 310.0], [74.6, 310.0], [74.7, 310.0], [74.8, 310.0], [74.9, 310.0], [75.0, 310.0], [75.1, 310.0], [75.2, 310.0], [75.3, 310.0], [75.4, 310.0], [75.5, 311.0], [75.6, 311.0], [75.7, 311.0], [75.8, 311.0], [75.9, 311.0], [76.0, 311.0], [76.1, 311.0], [76.2, 311.0], [76.3, 311.0], [76.4, 311.0], [76.5, 311.0], [76.6, 312.0], [76.7, 312.0], [76.8, 312.0], [76.9, 312.0], [77.0, 312.0], [77.1, 312.0], [77.2, 312.0], [77.3, 312.0], [77.4, 313.0], [77.5, 313.0], [77.6, 313.0], [77.7, 313.0], [77.8, 313.0], [77.9, 313.0], [78.0, 314.0], [78.1, 314.0], [78.2, 314.0], [78.3, 315.0], [78.4, 315.0], [78.5, 315.0], [78.6, 316.0], [78.7, 316.0], [78.8, 317.0], [78.9, 318.0], [79.0, 319.0], [79.1, 320.0], [79.2, 322.0], [79.3, 323.0], [79.4, 325.0], [79.5, 326.0], [79.6, 327.0], [79.7, 328.0], [79.8, 328.0], [79.9, 329.0], [80.0, 330.0], [80.1, 331.0], [80.2, 331.0], [80.3, 332.0], [80.4, 333.0], [80.5, 333.0], [80.6, 334.0], [80.7, 336.0], [80.8, 337.0], [80.9, 337.0], [81.0, 338.0], [81.1, 339.0], [81.2, 339.0], [81.3, 340.0], [81.4, 341.0], [81.5, 341.0], [81.6, 343.0], [81.7, 344.0], [81.8, 344.0], [81.9, 345.0], [82.0, 346.0], [82.1, 347.0], [82.2, 347.0], [82.3, 349.0], [82.4, 350.0], [82.5, 351.0], [82.6, 352.0], [82.7, 352.0], [82.8, 353.0], [82.9, 354.0], [83.0, 354.0], [83.1, 356.0], [83.2, 356.0], [83.3, 357.0], [83.4, 359.0], [83.5, 359.0], [83.6, 360.0], [83.7, 360.0], [83.8, 361.0], [83.9, 362.0], [84.0, 364.0], [84.1, 364.0], [84.2, 365.0], [84.3, 366.0], [84.4, 367.0], [84.5, 368.0], [84.6, 369.0], [84.7, 370.0], [84.8, 373.0], [84.9, 374.0], [85.0, 377.0], [85.1, 381.0], [85.2, 385.0], [85.3, 387.0], [85.4, 388.0], [85.5, 391.0], [85.6, 393.0], [85.7, 395.0], [85.8, 397.0], [85.9, 398.0], [86.0, 399.0], [86.1, 399.0], [86.2, 400.0], [86.3, 401.0], [86.4, 401.0], [86.5, 402.0], [86.6, 402.0], [86.7, 403.0], [86.8, 403.0], [86.9, 403.0], [87.0, 404.0], [87.1, 404.0], [87.2, 405.0], [87.3, 405.0], [87.4, 405.0], [87.5, 406.0], [87.6, 406.0], [87.7, 406.0], [87.8, 407.0], [87.9, 407.0], [88.0, 407.0], [88.1, 408.0], [88.2, 408.0], [88.3, 408.0], [88.4, 408.0], [88.5, 409.0], [88.6, 409.0], [88.7, 409.0], [88.8, 410.0], [88.9, 410.0], [89.0, 410.0], [89.1, 410.0], [89.2, 411.0], [89.3, 411.0], [89.4, 412.0], [89.5, 412.0], [89.6, 413.0], [89.7, 414.0], [89.8, 414.0], [89.9, 415.0], [90.0, 416.0], [90.1, 418.0], [90.2, 421.0], [90.3, 423.0], [90.4, 425.0], [90.5, 428.0], [90.6, 429.0], [90.7, 432.0], [90.8, 439.0], [90.9, 444.0], [91.0, 449.0], [91.1, 454.0], [91.2, 456.0], [91.3, 458.0], [91.4, 458.0], [91.5, 460.0], [91.6, 461.0], [91.7, 462.0], [91.8, 468.0], [91.9, 470.0], [92.0, 473.0], [92.1, 476.0], [92.2, 481.0], [92.3, 487.0], [92.4, 496.0], [92.5, 499.0], [92.6, 501.0], [92.7, 503.0], [92.8, 504.0], [92.9, 506.0], [93.0, 507.0], [93.1, 507.0], [93.2, 508.0], [93.3, 509.0], [93.4, 510.0], [93.5, 511.0], [93.6, 511.0], [93.7, 512.0], [93.8, 513.0], [93.9, 515.0], [94.0, 516.0], [94.1, 519.0], [94.2, 522.0], [94.3, 526.0], [94.4, 541.0], [94.5, 548.0], [94.6, 552.0], [94.7, 554.0], [94.8, 558.0], [94.9, 559.0], [95.0, 564.0], [95.1, 592.0], [95.2, 603.0], [95.3, 605.0], [95.4, 607.0], [95.5, 608.0], [95.6, 608.0], [95.7, 609.0], [95.8, 609.0], [95.9, 609.0], [96.0, 610.0], [96.1, 610.0], [96.2, 611.0], [96.3, 612.0], [96.4, 612.0], [96.5, 612.0], [96.6, 613.0], [96.7, 613.0], [96.8, 614.0], [96.9, 614.0], [97.0, 615.0], [97.1, 615.0], [97.2, 616.0], [97.3, 618.0], [97.4, 619.0], [97.5, 641.0], [97.6, 710.0], [97.7, 717.0], [97.8, 764.0], [97.9, 808.0], [98.0, 815.0], [98.1, 822.0], [98.2, 882.0], [98.3, 901.0], [98.4, 915.0], [98.5, 918.0], [98.6, 971.0], [98.7, 1128.0], [98.8, 1227.0], [98.9, 1473.0], [99.0, 60040.0], [99.1, 60056.0], [99.2, 60102.0], [99.3, 60106.0], [99.4, 60106.0], [99.5, 60107.0], [99.6, 60108.0], [99.7, 60108.0], [99.8, 60109.0], [99.9, 60110.0], [100.0, 60112.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3933.0, "series": [{"data": [[0.0, 292.0], [600.0, 242.0], [2400.0, 1.0], [700.0, 30.0], [2700.0, 5.0], [800.0, 45.0], [200.0, 3028.0], [900.0, 32.0], [60100.0, 81.0], [60000.0, 19.0], [1000.0, 4.0], [1100.0, 9.0], [300.0, 3933.0], [1200.0, 10.0], [4800.0, 1.0], [1300.0, 5.0], [1400.0, 2.0], [1500.0, 1.0], [400.0, 638.0], [100.0, 1352.0], [500.0, 260.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9250.0, "series": [{"data": [[0.0, 9250.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 632.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 56.990000000000045, "minX": 1.77799926E12, "maxY": 100.0, "series": [{"data": [[1.77799932E12, 100.0], [1.77799938E12, 56.990000000000045], [1.77799926E12, 91.44061841180593]], "isOverall": false, "label": "LTI 1.1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77799938E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 94.0, "minX": 1.0, "maxY": 60112.0, "series": [{"data": [[2.0, 60109.0], [3.0, 60108.0], [8.0, 60106.0], [9.0, 60112.0], [19.0, 60108.200000000004], [20.0, 717.1578947368422], [21.0, 103.63157894736842], [22.0, 7027.26923076923], [23.0, 101.29166666666666], [24.0, 101.47826086956522], [25.0, 97.55999999999999], [26.0, 96.5], [27.0, 9188.878787878788], [28.0, 97.0769230769231], [29.0, 97.86666666666666], [30.0, 97.16129032258064], [31.0, 94.0], [32.0, 133.6], [33.0, 22651.875], [34.0, 201.76923076923077], [35.0, 255.44444444444443], [36.0, 202.44444444444446], [37.0, 248.37500000000003], [38.0, 248.9411764705882], [39.0, 247.30769230769232], [40.0, 253.76470588235293], [41.0, 245.46666666666667], [43.0, 351.0], [44.0, 291.8333333333333], [45.0, 25878.35714285714], [46.0, 258.3529411764706], [47.0, 187.62500000000006], [48.0, 4847.342105263158], [49.0, 2692.4583333333335], [50.0, 193.41176470588235], [51.0, 230.15384615384613], [52.0, 3647.921568627451], [53.0, 105.64285714285714], [54.0, 222.30434782608694], [55.0, 207.16666666666669], [56.0, 125.90625], [57.0, 225.53846153846152], [58.0, 221.27272727272728], [59.0, 202.4035087719298], [60.0, 136.38461538461536], [61.0, 192.95652173913044], [62.0, 257.68750000000006], [63.0, 301.6], [64.0, 289.88888888888897], [66.0, 316.32000000000005], [67.0, 305.39130434782606], [68.0, 3168.9523809523807], [69.0, 286.92], [70.0, 287.49999999999994], [71.0, 2475.785714285714], [72.0, 294.5652173913043], [73.0, 291.06666666666666], [74.0, 6925.944444444444], [75.0, 8895.25], [76.0, 12239.35], [77.0, 300.09999999999997], [78.0, 343.3043478260871], [79.0, 23869.363636363632], [80.0, 292.7413793103448], [81.0, 203.11111111111111], [82.0, 189.13333333333333], [83.0, 249.0], [84.0, 469.38461538461536], [85.0, 433.80769230769226], [86.0, 337.108695652174], [87.0, 246.0344827586207], [88.0, 247.0689655172414], [89.0, 319.2258064516129], [90.0, 245.76315789473676], [91.0, 252.77777777777783], [92.0, 272.0], [93.0, 450.54545454545456], [94.0, 326.69642857142856], [95.0, 336.69565217391306], [96.0, 210.27659574468086], [97.0, 178.46153846153842], [98.0, 244.01298701298705], [99.0, 180.6818181818182], [100.0, 469.20449381469274], [1.0, 60109.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}, {"data": [[92.25415415415401, 894.352852852852]], "isOverall": false, "label": "Lanzamiento-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 878.3333333333334, "minX": 1.77799926E12, "maxY": 82866.16666666667, "series": [{"data": [[1.77799932E12, 2568.8], [1.77799938E12, 878.3333333333334], [1.77799926E12, 16222.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77799932E12, 13124.75], [1.77799938E12, 970.8], [1.77799926E12, 82866.16666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77799938E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 285.7050831576485, "minX": 1.77799926E12, "maxY": 60097.37, "series": [{"data": [[1.77799932E12, 359.09615384615415], [1.77799938E12, 60097.37], [1.77799926E12, 285.7050831576485]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77799938E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 285.6950105411102, "minX": 1.77799926E12, "maxY": 60096.780000000006, "series": [{"data": [[1.77799932E12, 359.09615384615415], [1.77799938E12, 60096.780000000006], [1.77799926E12, 285.6950105411102]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77799938E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77799926E12, "maxY": 2.827125790583282, "series": [{"data": [[1.77799932E12, 0.0], [1.77799938E12, 0.0], [1.77799926E12, 2.827125790583282]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77799938E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 85.0, "minX": 1.77799926E12, "maxY": 4815.0, "series": [{"data": [[1.77799932E12, 4815.0], [1.77799926E12, 1531.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77799932E12, 89.0], [1.77799926E12, 85.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77799932E12, 610.0], [1.77799926E12, 407.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77799932E12, 1224.47], [1.77799926E12, 707.6100000000006]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77799932E12, 306.0], [1.77799926E12, 299.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77799932E12, 616.3499999999999], [1.77799926E12, 498.0499999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77799932E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 95.0, "minX": 1.0, "maxY": 60109.0, "series": [{"data": [[9.0, 204.0], [177.0, 147.0], [197.0, 200.0], [214.0, 95.0], [229.0, 299.0], [231.0, 307.0], [244.0, 263.0], [252.0, 302.0], [265.0, 180.0], [269.0, 269.0], [256.0, 305.0], [264.0, 307.0], [1.0, 203.0], [276.0, 304.5], [274.0, 306.0], [273.0, 304.0], [297.0, 308.0], [289.0, 306.0], [303.0, 307.0], [312.0, 256.0], [311.0, 305.0], [319.0, 306.0], [19.0, 204.0], [324.0, 305.0], [332.0, 306.0], [345.0, 304.0], [349.0, 253.0], [342.0, 300.0], [356.0, 303.0], [357.0, 303.0], [372.0, 256.0], [380.0, 261.5], [381.0, 251.0], [388.0, 258.0], [407.0, 297.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 60109.0], [17.0, 60108.0], [81.0, 60107.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 407.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 95.0, "minX": 1.0, "maxY": 60109.0, "series": [{"data": [[9.0, 204.0], [177.0, 147.0], [197.0, 200.0], [214.0, 95.0], [229.0, 299.0], [231.0, 307.0], [244.0, 263.0], [252.0, 302.0], [265.0, 180.0], [269.0, 269.0], [256.0, 305.0], [264.0, 307.0], [1.0, 203.0], [276.0, 304.5], [274.0, 306.0], [273.0, 304.0], [297.0, 308.0], [289.0, 306.0], [303.0, 307.0], [312.0, 256.0], [311.0, 305.0], [319.0, 306.0], [19.0, 204.0], [324.0, 305.0], [332.0, 306.0], [345.0, 304.0], [349.0, 253.0], [342.0, 300.0], [356.0, 303.0], [357.0, 303.0], [372.0, 256.0], [380.0, 261.5], [381.0, 251.0], [388.0, 258.0], [407.0, 297.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 60109.0], [17.0, 60108.0], [81.0, 60106.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 407.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.533333333333335, "minX": 1.77799926E12, "maxY": 143.96666666666667, "series": [{"data": [[1.77799932E12, 22.533333333333335], [1.77799926E12, 143.96666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77799932E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77799926E12, "maxY": 142.3, "series": [{"data": [[1.77799932E12, 22.533333333333335], [1.77799926E12, 142.3]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77799938E12, 1.6666666666666667]], "isOverall": false, "label": "504", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77799938E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77799926E12, "maxY": 142.3, "series": [{"data": [[1.77799938E12, 1.6666666666666667]], "isOverall": false, "label": "Lanzamiento-failure", "isController": false}, {"data": [[1.77799932E12, 22.533333333333335], [1.77799926E12, 142.3]], "isOverall": false, "label": "Lanzamiento-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77799938E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.77799926E12, "maxY": 142.3, "series": [{"data": [[1.77799932E12, 22.533333333333335], [1.77799926E12, 142.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77799938E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77799938E12, "title": "Total Transactions Per Second"}},
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

