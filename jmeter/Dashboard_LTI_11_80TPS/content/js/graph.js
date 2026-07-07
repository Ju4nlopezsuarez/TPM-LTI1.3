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
        data: {"result": {"minY": 78.0, "minX": 0.0, "maxY": 6315.0, "series": [{"data": [[0.0, 78.0], [0.1, 80.0], [0.2, 80.0], [0.3, 81.0], [0.4, 81.0], [0.5, 81.0], [0.6, 81.0], [0.7, 82.0], [0.8, 82.0], [0.9, 82.0], [1.0, 82.0], [1.1, 82.0], [1.2, 83.0], [1.3, 83.0], [1.4, 83.0], [1.5, 83.0], [1.6, 83.0], [1.7, 84.0], [1.8, 84.0], [1.9, 84.0], [2.0, 84.0], [2.1, 85.0], [2.2, 85.0], [2.3, 85.0], [2.4, 85.0], [2.5, 85.0], [2.6, 86.0], [2.7, 86.0], [2.8, 86.0], [2.9, 86.0], [3.0, 86.0], [3.1, 86.0], [3.2, 86.0], [3.3, 87.0], [3.4, 87.0], [3.5, 87.0], [3.6, 87.0], [3.7, 87.0], [3.8, 87.0], [3.9, 87.0], [4.0, 88.0], [4.1, 88.0], [4.2, 88.0], [4.3, 88.0], [4.4, 88.0], [4.5, 88.0], [4.6, 88.0], [4.7, 89.0], [4.8, 89.0], [4.9, 89.0], [5.0, 89.0], [5.1, 89.0], [5.2, 89.0], [5.3, 89.0], [5.4, 89.0], [5.5, 90.0], [5.6, 90.0], [5.7, 90.0], [5.8, 90.0], [5.9, 90.0], [6.0, 91.0], [6.1, 91.0], [6.2, 91.0], [6.3, 91.0], [6.4, 91.0], [6.5, 91.0], [6.6, 92.0], [6.7, 92.0], [6.8, 92.0], [6.9, 92.0], [7.0, 92.0], [7.1, 92.0], [7.2, 92.0], [7.3, 92.0], [7.4, 92.0], [7.5, 92.0], [7.6, 93.0], [7.7, 93.0], [7.8, 93.0], [7.9, 93.0], [8.0, 93.0], [8.1, 94.0], [8.2, 94.0], [8.3, 94.0], [8.4, 94.0], [8.5, 94.0], [8.6, 94.0], [8.7, 94.0], [8.8, 95.0], [8.9, 95.0], [9.0, 95.0], [9.1, 95.0], [9.2, 95.0], [9.3, 96.0], [9.4, 96.0], [9.5, 96.0], [9.6, 96.0], [9.7, 96.0], [9.8, 97.0], [9.9, 97.0], [10.0, 97.0], [10.1, 97.0], [10.2, 97.0], [10.3, 97.0], [10.4, 98.0], [10.5, 98.0], [10.6, 98.0], [10.7, 98.0], [10.8, 98.0], [10.9, 98.0], [11.0, 98.0], [11.1, 98.0], [11.2, 98.0], [11.3, 99.0], [11.4, 99.0], [11.5, 99.0], [11.6, 99.0], [11.7, 99.0], [11.8, 99.0], [11.9, 99.0], [12.0, 99.0], [12.1, 100.0], [12.2, 100.0], [12.3, 100.0], [12.4, 100.0], [12.5, 100.0], [12.6, 100.0], [12.7, 100.0], [12.8, 101.0], [12.9, 101.0], [13.0, 101.0], [13.1, 101.0], [13.2, 101.0], [13.3, 101.0], [13.4, 101.0], [13.5, 101.0], [13.6, 102.0], [13.7, 102.0], [13.8, 102.0], [13.9, 102.0], [14.0, 102.0], [14.1, 102.0], [14.2, 102.0], [14.3, 102.0], [14.4, 102.0], [14.5, 102.0], [14.6, 103.0], [14.7, 103.0], [14.8, 103.0], [14.9, 103.0], [15.0, 103.0], [15.1, 103.0], [15.2, 103.0], [15.3, 103.0], [15.4, 104.0], [15.5, 104.0], [15.6, 104.0], [15.7, 104.0], [15.8, 104.0], [15.9, 104.0], [16.0, 104.0], [16.1, 104.0], [16.2, 105.0], [16.3, 105.0], [16.4, 105.0], [16.5, 105.0], [16.6, 105.0], [16.7, 106.0], [16.8, 106.0], [16.9, 106.0], [17.0, 106.0], [17.1, 106.0], [17.2, 106.0], [17.3, 106.0], [17.4, 107.0], [17.5, 107.0], [17.6, 107.0], [17.7, 107.0], [17.8, 107.0], [17.9, 107.0], [18.0, 108.0], [18.1, 108.0], [18.2, 108.0], [18.3, 109.0], [18.4, 109.0], [18.5, 109.0], [18.6, 109.0], [18.7, 109.0], [18.8, 110.0], [18.9, 110.0], [19.0, 110.0], [19.1, 110.0], [19.2, 111.0], [19.3, 111.0], [19.4, 111.0], [19.5, 111.0], [19.6, 111.0], [19.7, 111.0], [19.8, 112.0], [19.9, 112.0], [20.0, 112.0], [20.1, 112.0], [20.2, 112.0], [20.3, 112.0], [20.4, 113.0], [20.5, 113.0], [20.6, 113.0], [20.7, 113.0], [20.8, 113.0], [20.9, 113.0], [21.0, 113.0], [21.1, 113.0], [21.2, 114.0], [21.3, 114.0], [21.4, 114.0], [21.5, 114.0], [21.6, 115.0], [21.7, 115.0], [21.8, 115.0], [21.9, 115.0], [22.0, 115.0], [22.1, 115.0], [22.2, 116.0], [22.3, 116.0], [22.4, 116.0], [22.5, 116.0], [22.6, 117.0], [22.7, 117.0], [22.8, 117.0], [22.9, 117.0], [23.0, 117.0], [23.1, 117.0], [23.2, 118.0], [23.3, 118.0], [23.4, 118.0], [23.5, 118.0], [23.6, 119.0], [23.7, 119.0], [23.8, 119.0], [23.9, 120.0], [24.0, 120.0], [24.1, 120.0], [24.2, 120.0], [24.3, 120.0], [24.4, 121.0], [24.5, 121.0], [24.6, 121.0], [24.7, 121.0], [24.8, 121.0], [24.9, 122.0], [25.0, 122.0], [25.1, 122.0], [25.2, 122.0], [25.3, 122.0], [25.4, 123.0], [25.5, 123.0], [25.6, 123.0], [25.7, 123.0], [25.8, 124.0], [25.9, 124.0], [26.0, 124.0], [26.1, 124.0], [26.2, 124.0], [26.3, 125.0], [26.4, 126.0], [26.5, 126.0], [26.6, 126.0], [26.7, 127.0], [26.8, 127.0], [26.9, 128.0], [27.0, 128.0], [27.1, 128.0], [27.2, 128.0], [27.3, 129.0], [27.4, 129.0], [27.5, 129.0], [27.6, 129.0], [27.7, 130.0], [27.8, 130.0], [27.9, 131.0], [28.0, 131.0], [28.1, 132.0], [28.2, 132.0], [28.3, 132.0], [28.4, 132.0], [28.5, 133.0], [28.6, 133.0], [28.7, 133.0], [28.8, 134.0], [28.9, 134.0], [29.0, 134.0], [29.1, 134.0], [29.2, 134.0], [29.3, 135.0], [29.4, 135.0], [29.5, 135.0], [29.6, 135.0], [29.7, 136.0], [29.8, 136.0], [29.9, 136.0], [30.0, 136.0], [30.1, 136.0], [30.2, 137.0], [30.3, 137.0], [30.4, 137.0], [30.5, 137.0], [30.6, 138.0], [30.7, 138.0], [30.8, 138.0], [30.9, 138.0], [31.0, 139.0], [31.1, 139.0], [31.2, 139.0], [31.3, 139.0], [31.4, 140.0], [31.5, 140.0], [31.6, 140.0], [31.7, 140.0], [31.8, 141.0], [31.9, 141.0], [32.0, 141.0], [32.1, 141.0], [32.2, 142.0], [32.3, 142.0], [32.4, 142.0], [32.5, 142.0], [32.6, 143.0], [32.7, 143.0], [32.8, 143.0], [32.9, 144.0], [33.0, 144.0], [33.1, 144.0], [33.2, 145.0], [33.3, 145.0], [33.4, 145.0], [33.5, 145.0], [33.6, 146.0], [33.7, 146.0], [33.8, 146.0], [33.9, 146.0], [34.0, 147.0], [34.1, 147.0], [34.2, 148.0], [34.3, 148.0], [34.4, 149.0], [34.5, 149.0], [34.6, 149.0], [34.7, 150.0], [34.8, 150.0], [34.9, 150.0], [35.0, 151.0], [35.1, 151.0], [35.2, 151.0], [35.3, 151.0], [35.4, 152.0], [35.5, 152.0], [35.6, 152.0], [35.7, 152.0], [35.8, 153.0], [35.9, 153.0], [36.0, 153.0], [36.1, 153.0], [36.2, 153.0], [36.3, 154.0], [36.4, 154.0], [36.5, 154.0], [36.6, 154.0], [36.7, 154.0], [36.8, 155.0], [36.9, 155.0], [37.0, 155.0], [37.1, 155.0], [37.2, 156.0], [37.3, 156.0], [37.4, 156.0], [37.5, 157.0], [37.6, 157.0], [37.7, 157.0], [37.8, 157.0], [37.9, 157.0], [38.0, 158.0], [38.1, 158.0], [38.2, 159.0], [38.3, 159.0], [38.4, 159.0], [38.5, 159.0], [38.6, 160.0], [38.7, 160.0], [38.8, 160.0], [38.9, 161.0], [39.0, 161.0], [39.1, 161.0], [39.2, 161.0], [39.3, 162.0], [39.4, 162.0], [39.5, 162.0], [39.6, 162.0], [39.7, 163.0], [39.8, 163.0], [39.9, 163.0], [40.0, 163.0], [40.1, 164.0], [40.2, 165.0], [40.3, 165.0], [40.4, 165.0], [40.5, 166.0], [40.6, 166.0], [40.7, 166.0], [40.8, 167.0], [40.9, 167.0], [41.0, 167.0], [41.1, 168.0], [41.2, 168.0], [41.3, 169.0], [41.4, 169.0], [41.5, 169.0], [41.6, 169.0], [41.7, 170.0], [41.8, 170.0], [41.9, 170.0], [42.0, 170.0], [42.1, 171.0], [42.2, 171.0], [42.3, 171.0], [42.4, 171.0], [42.5, 171.0], [42.6, 172.0], [42.7, 172.0], [42.8, 172.0], [42.9, 173.0], [43.0, 173.0], [43.1, 173.0], [43.2, 173.0], [43.3, 174.0], [43.4, 174.0], [43.5, 174.0], [43.6, 174.0], [43.7, 174.0], [43.8, 175.0], [43.9, 175.0], [44.0, 175.0], [44.1, 175.0], [44.2, 175.0], [44.3, 176.0], [44.4, 176.0], [44.5, 176.0], [44.6, 176.0], [44.7, 176.0], [44.8, 177.0], [44.9, 177.0], [45.0, 177.0], [45.1, 177.0], [45.2, 177.0], [45.3, 177.0], [45.4, 178.0], [45.5, 178.0], [45.6, 178.0], [45.7, 178.0], [45.8, 178.0], [45.9, 179.0], [46.0, 179.0], [46.1, 179.0], [46.2, 179.0], [46.3, 179.0], [46.4, 179.0], [46.5, 180.0], [46.6, 180.0], [46.7, 180.0], [46.8, 180.0], [46.9, 181.0], [47.0, 181.0], [47.1, 181.0], [47.2, 181.0], [47.3, 181.0], [47.4, 181.0], [47.5, 181.0], [47.6, 181.0], [47.7, 181.0], [47.8, 182.0], [47.9, 182.0], [48.0, 182.0], [48.1, 182.0], [48.2, 182.0], [48.3, 182.0], [48.4, 183.0], [48.5, 183.0], [48.6, 183.0], [48.7, 183.0], [48.8, 183.0], [48.9, 184.0], [49.0, 184.0], [49.1, 184.0], [49.2, 184.0], [49.3, 184.0], [49.4, 185.0], [49.5, 185.0], [49.6, 185.0], [49.7, 185.0], [49.8, 185.0], [49.9, 185.0], [50.0, 185.0], [50.1, 186.0], [50.2, 186.0], [50.3, 186.0], [50.4, 186.0], [50.5, 186.0], [50.6, 187.0], [50.7, 187.0], [50.8, 187.0], [50.9, 188.0], [51.0, 188.0], [51.1, 188.0], [51.2, 188.0], [51.3, 188.0], [51.4, 189.0], [51.5, 189.0], [51.6, 189.0], [51.7, 189.0], [51.8, 190.0], [51.9, 190.0], [52.0, 190.0], [52.1, 190.0], [52.2, 190.0], [52.3, 190.0], [52.4, 191.0], [52.5, 191.0], [52.6, 191.0], [52.7, 191.0], [52.8, 191.0], [52.9, 192.0], [53.0, 192.0], [53.1, 192.0], [53.2, 192.0], [53.3, 193.0], [53.4, 193.0], [53.5, 193.0], [53.6, 193.0], [53.7, 194.0], [53.8, 194.0], [53.9, 194.0], [54.0, 195.0], [54.1, 195.0], [54.2, 195.0], [54.3, 195.0], [54.4, 195.0], [54.5, 196.0], [54.6, 196.0], [54.7, 196.0], [54.8, 197.0], [54.9, 197.0], [55.0, 197.0], [55.1, 197.0], [55.2, 198.0], [55.3, 198.0], [55.4, 198.0], [55.5, 198.0], [55.6, 199.0], [55.7, 199.0], [55.8, 199.0], [55.9, 199.0], [56.0, 199.0], [56.1, 200.0], [56.2, 200.0], [56.3, 200.0], [56.4, 200.0], [56.5, 201.0], [56.6, 201.0], [56.7, 201.0], [56.8, 201.0], [56.9, 201.0], [57.0, 202.0], [57.1, 202.0], [57.2, 202.0], [57.3, 202.0], [57.4, 202.0], [57.5, 202.0], [57.6, 203.0], [57.7, 203.0], [57.8, 203.0], [57.9, 203.0], [58.0, 204.0], [58.1, 204.0], [58.2, 204.0], [58.3, 204.0], [58.4, 204.0], [58.5, 205.0], [58.6, 205.0], [58.7, 205.0], [58.8, 205.0], [58.9, 205.0], [59.0, 206.0], [59.1, 206.0], [59.2, 206.0], [59.3, 206.0], [59.4, 206.0], [59.5, 206.0], [59.6, 206.0], [59.7, 207.0], [59.8, 207.0], [59.9, 207.0], [60.0, 207.0], [60.1, 208.0], [60.2, 208.0], [60.3, 208.0], [60.4, 208.0], [60.5, 208.0], [60.6, 209.0], [60.7, 209.0], [60.8, 209.0], [60.9, 209.0], [61.0, 209.0], [61.1, 209.0], [61.2, 210.0], [61.3, 210.0], [61.4, 210.0], [61.5, 210.0], [61.6, 210.0], [61.7, 211.0], [61.8, 211.0], [61.9, 211.0], [62.0, 211.0], [62.1, 211.0], [62.2, 212.0], [62.3, 212.0], [62.4, 212.0], [62.5, 212.0], [62.6, 212.0], [62.7, 213.0], [62.8, 213.0], [62.9, 213.0], [63.0, 213.0], [63.1, 213.0], [63.2, 213.0], [63.3, 214.0], [63.4, 214.0], [63.5, 214.0], [63.6, 214.0], [63.7, 214.0], [63.8, 215.0], [63.9, 215.0], [64.0, 215.0], [64.1, 215.0], [64.2, 216.0], [64.3, 216.0], [64.4, 216.0], [64.5, 216.0], [64.6, 216.0], [64.7, 216.0], [64.8, 217.0], [64.9, 217.0], [65.0, 217.0], [65.1, 217.0], [65.2, 217.0], [65.3, 217.0], [65.4, 218.0], [65.5, 218.0], [65.6, 218.0], [65.7, 218.0], [65.8, 218.0], [65.9, 219.0], [66.0, 219.0], [66.1, 219.0], [66.2, 219.0], [66.3, 220.0], [66.4, 220.0], [66.5, 220.0], [66.6, 220.0], [66.7, 220.0], [66.8, 221.0], [66.9, 221.0], [67.0, 221.0], [67.1, 221.0], [67.2, 221.0], [67.3, 222.0], [67.4, 222.0], [67.5, 222.0], [67.6, 222.0], [67.7, 222.0], [67.8, 223.0], [67.9, 223.0], [68.0, 223.0], [68.1, 223.0], [68.2, 223.0], [68.3, 224.0], [68.4, 224.0], [68.5, 224.0], [68.6, 224.0], [68.7, 224.0], [68.8, 224.0], [68.9, 224.0], [69.0, 225.0], [69.1, 225.0], [69.2, 225.0], [69.3, 225.0], [69.4, 226.0], [69.5, 226.0], [69.6, 226.0], [69.7, 226.0], [69.8, 227.0], [69.9, 227.0], [70.0, 227.0], [70.1, 227.0], [70.2, 227.0], [70.3, 228.0], [70.4, 228.0], [70.5, 229.0], [70.6, 229.0], [70.7, 229.0], [70.8, 229.0], [70.9, 229.0], [71.0, 229.0], [71.1, 230.0], [71.2, 230.0], [71.3, 231.0], [71.4, 231.0], [71.5, 231.0], [71.6, 231.0], [71.7, 232.0], [71.8, 232.0], [71.9, 233.0], [72.0, 233.0], [72.1, 233.0], [72.2, 233.0], [72.3, 233.0], [72.4, 234.0], [72.5, 234.0], [72.6, 234.0], [72.7, 235.0], [72.8, 235.0], [72.9, 235.0], [73.0, 236.0], [73.1, 236.0], [73.2, 236.0], [73.3, 236.0], [73.4, 237.0], [73.5, 237.0], [73.6, 238.0], [73.7, 238.0], [73.8, 238.0], [73.9, 239.0], [74.0, 239.0], [74.1, 239.0], [74.2, 239.0], [74.3, 240.0], [74.4, 240.0], [74.5, 240.0], [74.6, 241.0], [74.7, 241.0], [74.8, 241.0], [74.9, 241.0], [75.0, 242.0], [75.1, 242.0], [75.2, 242.0], [75.3, 242.0], [75.4, 242.0], [75.5, 243.0], [75.6, 243.0], [75.7, 243.0], [75.8, 244.0], [75.9, 244.0], [76.0, 244.0], [76.1, 245.0], [76.2, 245.0], [76.3, 245.0], [76.4, 245.0], [76.5, 246.0], [76.6, 246.0], [76.7, 246.0], [76.8, 246.0], [76.9, 246.0], [77.0, 247.0], [77.1, 247.0], [77.2, 247.0], [77.3, 248.0], [77.4, 248.0], [77.5, 248.0], [77.6, 248.0], [77.7, 248.0], [77.8, 249.0], [77.9, 249.0], [78.0, 249.0], [78.1, 249.0], [78.2, 249.0], [78.3, 250.0], [78.4, 250.0], [78.5, 250.0], [78.6, 251.0], [78.7, 251.0], [78.8, 251.0], [78.9, 251.0], [79.0, 251.0], [79.1, 252.0], [79.2, 252.0], [79.3, 252.0], [79.4, 252.0], [79.5, 252.0], [79.6, 252.0], [79.7, 253.0], [79.8, 253.0], [79.9, 253.0], [80.0, 253.0], [80.1, 254.0], [80.2, 254.0], [80.3, 254.0], [80.4, 254.0], [80.5, 255.0], [80.6, 255.0], [80.7, 255.0], [80.8, 255.0], [80.9, 256.0], [81.0, 256.0], [81.1, 257.0], [81.2, 257.0], [81.3, 257.0], [81.4, 258.0], [81.5, 258.0], [81.6, 258.0], [81.7, 259.0], [81.8, 259.0], [81.9, 259.0], [82.0, 259.0], [82.1, 259.0], [82.2, 260.0], [82.3, 260.0], [82.4, 260.0], [82.5, 261.0], [82.6, 262.0], [82.7, 262.0], [82.8, 262.0], [82.9, 263.0], [83.0, 263.0], [83.1, 263.0], [83.2, 263.0], [83.3, 263.0], [83.4, 264.0], [83.5, 265.0], [83.6, 265.0], [83.7, 265.0], [83.8, 266.0], [83.9, 266.0], [84.0, 266.0], [84.1, 266.0], [84.2, 267.0], [84.3, 267.0], [84.4, 268.0], [84.5, 268.0], [84.6, 268.0], [84.7, 269.0], [84.8, 269.0], [84.9, 270.0], [85.0, 270.0], [85.1, 271.0], [85.2, 271.0], [85.3, 272.0], [85.4, 272.0], [85.5, 272.0], [85.6, 273.0], [85.7, 273.0], [85.8, 273.0], [85.9, 274.0], [86.0, 274.0], [86.1, 275.0], [86.2, 275.0], [86.3, 276.0], [86.4, 277.0], [86.5, 277.0], [86.6, 278.0], [86.7, 278.0], [86.8, 279.0], [86.9, 280.0], [87.0, 280.0], [87.1, 282.0], [87.2, 283.0], [87.3, 284.0], [87.4, 285.0], [87.5, 285.0], [87.6, 286.0], [87.7, 287.0], [87.8, 288.0], [87.9, 288.0], [88.0, 290.0], [88.1, 291.0], [88.2, 291.0], [88.3, 292.0], [88.4, 292.0], [88.5, 294.0], [88.6, 295.0], [88.7, 296.0], [88.8, 297.0], [88.9, 297.0], [89.0, 298.0], [89.1, 299.0], [89.2, 299.0], [89.3, 300.0], [89.4, 301.0], [89.5, 301.0], [89.6, 302.0], [89.7, 302.0], [89.8, 302.0], [89.9, 304.0], [90.0, 305.0], [90.1, 306.0], [90.2, 307.0], [90.3, 309.0], [90.4, 312.0], [90.5, 312.0], [90.6, 313.0], [90.7, 314.0], [90.8, 315.0], [90.9, 316.0], [91.0, 317.0], [91.1, 317.0], [91.2, 319.0], [91.3, 320.0], [91.4, 321.0], [91.5, 324.0], [91.6, 324.0], [91.7, 325.0], [91.8, 326.0], [91.9, 330.0], [92.0, 332.0], [92.1, 333.0], [92.2, 335.0], [92.3, 335.0], [92.4, 336.0], [92.5, 337.0], [92.6, 338.0], [92.7, 339.0], [92.8, 341.0], [92.9, 342.0], [93.0, 343.0], [93.1, 344.0], [93.2, 348.0], [93.3, 351.0], [93.4, 354.0], [93.5, 356.0], [93.6, 359.0], [93.7, 361.0], [93.8, 363.0], [93.9, 365.0], [94.0, 367.0], [94.1, 370.0], [94.2, 372.0], [94.3, 373.0], [94.4, 377.0], [94.5, 380.0], [94.6, 381.0], [94.7, 382.0], [94.8, 384.0], [94.9, 385.0], [95.0, 387.0], [95.1, 388.0], [95.2, 390.0], [95.3, 396.0], [95.4, 398.0], [95.5, 402.0], [95.6, 409.0], [95.7, 412.0], [95.8, 418.0], [95.9, 423.0], [96.0, 431.0], [96.1, 433.0], [96.2, 435.0], [96.3, 437.0], [96.4, 441.0], [96.5, 442.0], [96.6, 447.0], [96.7, 453.0], [96.8, 455.0], [96.9, 459.0], [97.0, 474.0], [97.1, 486.0], [97.2, 495.0], [97.3, 506.0], [97.4, 521.0], [97.5, 533.0], [97.6, 549.0], [97.7, 563.0], [97.8, 577.0], [97.9, 587.0], [98.0, 593.0], [98.1, 596.0], [98.2, 618.0], [98.3, 670.0], [98.4, 682.0], [98.5, 722.0], [98.6, 1120.0], [98.7, 1520.0], [98.8, 1877.0], [98.9, 2340.0], [99.0, 2920.0], [99.1, 3265.0], [99.2, 3818.0], [99.3, 4220.0], [99.4, 4524.0], [99.5, 4916.0], [99.6, 5340.0], [99.7, 5767.0], [99.8, 6107.0], [99.9, 6114.0], [100.0, 6315.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1922.0, "series": [{"data": [[0.0, 528.0], [600.0, 12.0], [700.0, 2.0], [800.0, 1.0], [1000.0, 1.0], [1100.0, 3.0], [1200.0, 1.0], [1300.0, 2.0], [1500.0, 1.0], [100.0, 1922.0], [1700.0, 3.0], [1800.0, 1.0], [1900.0, 1.0], [2100.0, 1.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [3200.0, 3.0], [3300.0, 1.0], [200.0, 1453.0], [3500.0, 3.0], [3800.0, 4.0], [4200.0, 2.0], [4500.0, 1.0], [4600.0, 1.0], [4400.0, 2.0], [4700.0, 2.0], [4800.0, 1.0], [300.0, 271.0], [4900.0, 1.0], [5300.0, 2.0], [5200.0, 2.0], [5600.0, 1.0], [5500.0, 1.0], [5700.0, 2.0], [5900.0, 3.0], [6100.0, 5.0], [6000.0, 1.0], [6200.0, 3.0], [6300.0, 1.0], [400.0, 79.0], [500.0, 41.0]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4253.0, "series": [{"data": [[0.0, 4253.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 63.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 57.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 97.42556597301616, "minX": 1.7782332E12, "maxY": 97.42556597301616, "series": [{"data": [[1.7782332E12, 97.42556597301616]], "isOverall": false, "label": "LTI 1.1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7782332E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 91.33333333333333, "minX": 4.0, "maxY": 4099.888888888888, "series": [{"data": [[4.0, 674.0], [7.0, 677.0], [8.0, 682.5], [9.0, 676.75], [16.0, 595.5], [18.0, 596.0], [29.0, 391.0], [33.0, 398.5], [34.0, 391.66666666666663], [39.0, 337.2], [43.0, 162.0], [42.0, 161.33333333333334], [45.0, 101.0], [44.0, 104.0], [47.0, 92.0], [46.0, 98.0], [49.0, 127.0], [51.0, 136.0], [54.0, 129.66666666666666], [57.0, 91.33333333333333], [59.0, 120.5], [61.0, 154.0], [60.0, 122.0], [65.0, 154.0], [70.0, 3516.454545454546], [71.0, 1229.0499999999997], [72.0, 4099.888888888888], [73.0, 3442.235294117647], [74.0, 455.31884057971007], [75.0, 592.1111111111112], [76.0, 139.0], [77.0, 129.6], [78.0, 193.375], [79.0, 169.0], [80.0, 272.5], [81.0, 185.0], [82.0, 273.57142857142856], [83.0, 211.56521739130437], [84.0, 196.32000000000005], [85.0, 177.0], [86.0, 148.2857142857143], [87.0, 97.0], [88.0, 355.0], [89.0, 272.3333333333333], [90.0, 277.3333333333333], [91.0, 232.0], [92.0, 200.4], [93.0, 208.64705882352945], [94.0, 182.87096774193552], [95.0, 179.5925925925926], [96.0, 132.0], [97.0, 133.4], [98.0, 242.25], [99.0, 174.55555555555554], [100.0, 190.96059365404335]], "isOverall": false, "label": "Lanzamiento", "isController": false}, {"data": [[97.42556597301616, 248.52801280585453]], "isOverall": false, "label": "Lanzamiento-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8308.7, "minX": 1.7782332E12, "maxY": 42449.933333333334, "series": [{"data": [[1.7782332E12, 8308.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7782332E12, 42449.933333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7782332E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 248.52801280585453, "minX": 1.7782332E12, "maxY": 248.52801280585453, "series": [{"data": [[1.7782332E12, 248.52801280585453]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7782332E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 248.5120054882232, "minX": 1.7782332E12, "maxY": 248.5120054882232, "series": [{"data": [[1.7782332E12, 248.5120054882232]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7782332E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 53.142693802881325, "minX": 1.7782332E12, "maxY": 53.142693802881325, "series": [{"data": [[1.7782332E12, 53.142693802881325]], "isOverall": false, "label": "Lanzamiento", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7782332E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 78.0, "minX": 1.7782332E12, "maxY": 6315.0, "series": [{"data": [[1.7782332E12, 6315.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7782332E12, 78.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7782332E12, 305.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7782332E12, 2934.040000000012]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7782332E12, 185.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7782332E12, 387.3000000000002]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7782332E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 117.0, "minX": 46.0, "maxY": 381.0, "series": [{"data": [[46.0, 324.5], [51.0, 223.0], [52.0, 118.0], [55.0, 202.0], [54.0, 154.0], [56.0, 233.0], [71.0, 182.0], [70.0, 204.0], [69.0, 117.0], [73.0, 160.0], [74.0, 175.0], [72.0, 276.5], [75.0, 195.0], [79.0, 264.5], [77.0, 148.0], [81.0, 193.0], [86.0, 206.5], [87.0, 180.0], [88.0, 219.0], [91.0, 209.0], [89.0, 146.0], [90.0, 199.0], [93.0, 148.0], [95.0, 182.0], [92.0, 188.5], [94.0, 200.0], [98.0, 188.0], [96.0, 168.0], [97.0, 195.0], [142.0, 381.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 142.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 117.0, "minX": 46.0, "maxY": 381.0, "series": [{"data": [[46.0, 324.5], [51.0, 223.0], [52.0, 118.0], [55.0, 202.0], [54.0, 154.0], [56.0, 233.0], [71.0, 182.0], [70.0, 204.0], [69.0, 117.0], [73.0, 160.0], [74.0, 175.0], [72.0, 276.5], [75.0, 195.0], [79.0, 264.5], [77.0, 148.0], [81.0, 193.0], [86.0, 206.5], [87.0, 180.0], [88.0, 219.0], [91.0, 209.0], [89.0, 146.0], [90.0, 199.0], [93.0, 148.0], [95.0, 182.0], [92.0, 188.5], [94.0, 200.0], [98.0, 188.0], [96.0, 168.0], [97.0, 195.0], [142.0, 381.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 142.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.9666666666666667, "minX": 1.77823314E12, "maxY": 71.91666666666667, "series": [{"data": [[1.77823314E12, 0.9666666666666667], [1.7782332E12, 71.91666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7782332E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 72.88333333333334, "minX": 1.7782332E12, "maxY": 72.88333333333334, "series": [{"data": [[1.7782332E12, 72.88333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7782332E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 72.88333333333334, "minX": 1.7782332E12, "maxY": 72.88333333333334, "series": [{"data": [[1.7782332E12, 72.88333333333334]], "isOverall": false, "label": "Lanzamiento-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7782332E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 72.88333333333334, "minX": 1.7782332E12, "maxY": 72.88333333333334, "series": [{"data": [[1.7782332E12, 72.88333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7782332E12, "title": "Total Transactions Per Second"}},
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

