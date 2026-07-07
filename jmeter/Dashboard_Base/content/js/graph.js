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
        data: {"result": {"minY": 82.0, "minX": 0.0, "maxY": 6468.0, "series": [{"data": [[0.0, 82.0], [0.1, 89.0], [0.2, 91.0], [0.3, 110.0], [0.4, 116.0], [0.5, 120.0], [0.6, 122.0], [0.7, 123.0], [0.8, 125.0], [0.9, 127.0], [1.0, 129.0], [1.1, 131.0], [1.2, 132.0], [1.3, 134.0], [1.4, 136.0], [1.5, 136.0], [1.6, 137.0], [1.7, 144.0], [1.8, 153.0], [1.9, 161.0], [2.0, 164.0], [2.1, 171.0], [2.2, 179.0], [2.3, 180.0], [2.4, 181.0], [2.5, 182.0], [2.6, 182.0], [2.7, 183.0], [2.8, 184.0], [2.9, 199.0], [3.0, 202.0], [3.1, 207.0], [3.2, 221.0], [3.3, 225.0], [3.4, 230.0], [3.5, 233.0], [3.6, 240.0], [3.7, 241.0], [3.8, 242.0], [3.9, 244.0], [4.0, 246.0], [4.1, 247.0], [4.2, 248.0], [4.3, 249.0], [4.4, 250.0], [4.5, 253.0], [4.6, 254.0], [4.7, 256.0], [4.8, 260.0], [4.9, 264.0], [5.0, 265.0], [5.1, 269.0], [5.2, 272.0], [5.3, 274.0], [5.4, 276.0], [5.5, 277.0], [5.6, 279.0], [5.7, 282.0], [5.8, 283.0], [5.9, 285.0], [6.0, 288.0], [6.1, 290.0], [6.2, 294.0], [6.3, 297.0], [6.4, 299.0], [6.5, 301.0], [6.6, 303.0], [6.7, 304.0], [6.8, 304.0], [6.9, 305.0], [7.0, 305.0], [7.1, 306.0], [7.2, 306.0], [7.3, 307.0], [7.4, 308.0], [7.5, 310.0], [7.6, 312.0], [7.7, 314.0], [7.8, 317.0], [7.9, 320.0], [8.0, 322.0], [8.1, 324.0], [8.2, 325.0], [8.3, 326.0], [8.4, 327.0], [8.5, 328.0], [8.6, 329.0], [8.7, 329.0], [8.8, 331.0], [8.9, 332.0], [9.0, 333.0], [9.1, 334.0], [9.2, 334.0], [9.3, 335.0], [9.4, 336.0], [9.5, 336.0], [9.6, 337.0], [9.7, 337.0], [9.8, 338.0], [9.9, 339.0], [10.0, 341.0], [10.1, 341.0], [10.2, 342.0], [10.3, 342.0], [10.4, 342.0], [10.5, 343.0], [10.6, 343.0], [10.7, 344.0], [10.8, 344.0], [10.9, 346.0], [11.0, 346.0], [11.1, 347.0], [11.2, 347.0], [11.3, 348.0], [11.4, 348.0], [11.5, 348.0], [11.6, 349.0], [11.7, 350.0], [11.8, 351.0], [11.9, 351.0], [12.0, 352.0], [12.1, 352.0], [12.2, 353.0], [12.3, 353.0], [12.4, 354.0], [12.5, 355.0], [12.6, 356.0], [12.7, 356.0], [12.8, 357.0], [12.9, 357.0], [13.0, 357.0], [13.1, 358.0], [13.2, 359.0], [13.3, 359.0], [13.4, 360.0], [13.5, 361.0], [13.6, 361.0], [13.7, 362.0], [13.8, 363.0], [13.9, 363.0], [14.0, 364.0], [14.1, 365.0], [14.2, 366.0], [14.3, 366.0], [14.4, 366.0], [14.5, 367.0], [14.6, 367.0], [14.7, 367.0], [14.8, 368.0], [14.9, 368.0], [15.0, 369.0], [15.1, 369.0], [15.2, 369.0], [15.3, 370.0], [15.4, 371.0], [15.5, 371.0], [15.6, 371.0], [15.7, 372.0], [15.8, 372.0], [15.9, 373.0], [16.0, 374.0], [16.1, 375.0], [16.2, 375.0], [16.3, 377.0], [16.4, 377.0], [16.5, 379.0], [16.6, 380.0], [16.7, 380.0], [16.8, 381.0], [16.9, 381.0], [17.0, 381.0], [17.1, 382.0], [17.2, 382.0], [17.3, 383.0], [17.4, 383.0], [17.5, 384.0], [17.6, 385.0], [17.7, 386.0], [17.8, 386.0], [17.9, 387.0], [18.0, 387.0], [18.1, 388.0], [18.2, 388.0], [18.3, 389.0], [18.4, 389.0], [18.5, 390.0], [18.6, 390.0], [18.7, 390.0], [18.8, 391.0], [18.9, 391.0], [19.0, 392.0], [19.1, 393.0], [19.2, 393.0], [19.3, 394.0], [19.4, 395.0], [19.5, 396.0], [19.6, 397.0], [19.7, 398.0], [19.8, 400.0], [19.9, 401.0], [20.0, 402.0], [20.1, 404.0], [20.2, 405.0], [20.3, 405.0], [20.4, 405.0], [20.5, 406.0], [20.6, 406.0], [20.7, 407.0], [20.8, 407.0], [20.9, 408.0], [21.0, 408.0], [21.1, 409.0], [21.2, 409.0], [21.3, 409.0], [21.4, 410.0], [21.5, 410.0], [21.6, 410.0], [21.7, 411.0], [21.8, 411.0], [21.9, 411.0], [22.0, 411.0], [22.1, 411.0], [22.2, 411.0], [22.3, 412.0], [22.4, 412.0], [22.5, 412.0], [22.6, 412.0], [22.7, 413.0], [22.8, 413.0], [22.9, 413.0], [23.0, 414.0], [23.1, 414.0], [23.2, 414.0], [23.3, 414.0], [23.4, 415.0], [23.5, 416.0], [23.6, 416.0], [23.7, 417.0], [23.8, 418.0], [23.9, 419.0], [24.0, 420.0], [24.1, 420.0], [24.2, 421.0], [24.3, 422.0], [24.4, 422.0], [24.5, 423.0], [24.6, 426.0], [24.7, 428.0], [24.8, 428.0], [24.9, 430.0], [25.0, 430.0], [25.1, 431.0], [25.2, 431.0], [25.3, 433.0], [25.4, 435.0], [25.5, 436.0], [25.6, 437.0], [25.7, 437.0], [25.8, 439.0], [25.9, 441.0], [26.0, 441.0], [26.1, 442.0], [26.2, 442.0], [26.3, 442.0], [26.4, 443.0], [26.5, 443.0], [26.6, 444.0], [26.7, 445.0], [26.8, 446.0], [26.9, 447.0], [27.0, 448.0], [27.1, 448.0], [27.2, 449.0], [27.3, 450.0], [27.4, 451.0], [27.5, 451.0], [27.6, 452.0], [27.7, 453.0], [27.8, 453.0], [27.9, 454.0], [28.0, 455.0], [28.1, 456.0], [28.2, 459.0], [28.3, 459.0], [28.4, 461.0], [28.5, 462.0], [28.6, 463.0], [28.7, 464.0], [28.8, 464.0], [28.9, 465.0], [29.0, 465.0], [29.1, 465.0], [29.2, 466.0], [29.3, 466.0], [29.4, 467.0], [29.5, 468.0], [29.6, 473.0], [29.7, 475.0], [29.8, 479.0], [29.9, 480.0], [30.0, 484.0], [30.1, 486.0], [30.2, 487.0], [30.3, 488.0], [30.4, 488.0], [30.5, 489.0], [30.6, 489.0], [30.7, 490.0], [30.8, 490.0], [30.9, 491.0], [31.0, 491.0], [31.1, 492.0], [31.2, 494.0], [31.3, 495.0], [31.4, 496.0], [31.5, 498.0], [31.6, 499.0], [31.7, 500.0], [31.8, 500.0], [31.9, 503.0], [32.0, 503.0], [32.1, 503.0], [32.2, 505.0], [32.3, 505.0], [32.4, 506.0], [32.5, 507.0], [32.6, 507.0], [32.7, 508.0], [32.8, 508.0], [32.9, 508.0], [33.0, 509.0], [33.1, 509.0], [33.2, 509.0], [33.3, 510.0], [33.4, 510.0], [33.5, 511.0], [33.6, 511.0], [33.7, 511.0], [33.8, 512.0], [33.9, 512.0], [34.0, 512.0], [34.1, 512.0], [34.2, 513.0], [34.3, 513.0], [34.4, 513.0], [34.5, 514.0], [34.6, 517.0], [34.7, 520.0], [34.8, 523.0], [34.9, 524.0], [35.0, 526.0], [35.1, 527.0], [35.2, 530.0], [35.3, 532.0], [35.4, 532.0], [35.5, 533.0], [35.6, 534.0], [35.7, 534.0], [35.8, 534.0], [35.9, 535.0], [36.0, 535.0], [36.1, 536.0], [36.2, 537.0], [36.3, 538.0], [36.4, 538.0], [36.5, 539.0], [36.6, 540.0], [36.7, 541.0], [36.8, 542.0], [36.9, 543.0], [37.0, 544.0], [37.1, 545.0], [37.2, 546.0], [37.3, 546.0], [37.4, 547.0], [37.5, 548.0], [37.6, 549.0], [37.7, 549.0], [37.8, 551.0], [37.9, 552.0], [38.0, 552.0], [38.1, 553.0], [38.2, 554.0], [38.3, 555.0], [38.4, 555.0], [38.5, 556.0], [38.6, 556.0], [38.7, 557.0], [38.8, 557.0], [38.9, 558.0], [39.0, 559.0], [39.1, 559.0], [39.2, 560.0], [39.3, 560.0], [39.4, 561.0], [39.5, 562.0], [39.6, 562.0], [39.7, 563.0], [39.8, 563.0], [39.9, 564.0], [40.0, 565.0], [40.1, 566.0], [40.2, 566.0], [40.3, 567.0], [40.4, 567.0], [40.5, 568.0], [40.6, 570.0], [40.7, 570.0], [40.8, 571.0], [40.9, 572.0], [41.0, 573.0], [41.1, 574.0], [41.2, 575.0], [41.3, 575.0], [41.4, 575.0], [41.5, 576.0], [41.6, 577.0], [41.7, 577.0], [41.8, 577.0], [41.9, 578.0], [42.0, 578.0], [42.1, 579.0], [42.2, 580.0], [42.3, 580.0], [42.4, 581.0], [42.5, 583.0], [42.6, 583.0], [42.7, 584.0], [42.8, 585.0], [42.9, 585.0], [43.0, 585.0], [43.1, 585.0], [43.2, 586.0], [43.3, 587.0], [43.4, 587.0], [43.5, 588.0], [43.6, 588.0], [43.7, 589.0], [43.8, 590.0], [43.9, 590.0], [44.0, 591.0], [44.1, 591.0], [44.2, 591.0], [44.3, 592.0], [44.4, 592.0], [44.5, 592.0], [44.6, 593.0], [44.7, 593.0], [44.8, 593.0], [44.9, 594.0], [45.0, 594.0], [45.1, 595.0], [45.2, 595.0], [45.3, 595.0], [45.4, 596.0], [45.5, 597.0], [45.6, 598.0], [45.7, 599.0], [45.8, 600.0], [45.9, 603.0], [46.0, 604.0], [46.1, 606.0], [46.2, 606.0], [46.3, 607.0], [46.4, 607.0], [46.5, 608.0], [46.6, 608.0], [46.7, 609.0], [46.8, 609.0], [46.9, 610.0], [47.0, 610.0], [47.1, 610.0], [47.2, 611.0], [47.3, 611.0], [47.4, 611.0], [47.5, 611.0], [47.6, 612.0], [47.7, 612.0], [47.8, 612.0], [47.9, 612.0], [48.0, 612.0], [48.1, 613.0], [48.2, 613.0], [48.3, 613.0], [48.4, 613.0], [48.5, 613.0], [48.6, 613.0], [48.7, 613.0], [48.8, 614.0], [48.9, 614.0], [49.0, 614.0], [49.1, 614.0], [49.2, 614.0], [49.3, 614.0], [49.4, 614.0], [49.5, 615.0], [49.6, 615.0], [49.7, 615.0], [49.8, 615.0], [49.9, 615.0], [50.0, 615.0], [50.1, 615.0], [50.2, 615.0], [50.3, 616.0], [50.4, 616.0], [50.5, 616.0], [50.6, 616.0], [50.7, 616.0], [50.8, 616.0], [50.9, 616.0], [51.0, 617.0], [51.1, 617.0], [51.2, 617.0], [51.3, 617.0], [51.4, 617.0], [51.5, 617.0], [51.6, 618.0], [51.7, 618.0], [51.8, 618.0], [51.9, 618.0], [52.0, 618.0], [52.1, 618.0], [52.2, 618.0], [52.3, 618.0], [52.4, 619.0], [52.5, 619.0], [52.6, 619.0], [52.7, 619.0], [52.8, 619.0], [52.9, 619.0], [53.0, 619.0], [53.1, 620.0], [53.2, 620.0], [53.3, 620.0], [53.4, 620.0], [53.5, 620.0], [53.6, 621.0], [53.7, 621.0], [53.8, 622.0], [53.9, 622.0], [54.0, 622.0], [54.1, 623.0], [54.2, 623.0], [54.3, 623.0], [54.4, 624.0], [54.5, 624.0], [54.6, 625.0], [54.7, 625.0], [54.8, 625.0], [54.9, 626.0], [55.0, 627.0], [55.1, 628.0], [55.2, 629.0], [55.3, 630.0], [55.4, 631.0], [55.5, 632.0], [55.6, 633.0], [55.7, 634.0], [55.8, 634.0], [55.9, 635.0], [56.0, 635.0], [56.1, 636.0], [56.2, 637.0], [56.3, 638.0], [56.4, 639.0], [56.5, 640.0], [56.6, 641.0], [56.7, 643.0], [56.8, 644.0], [56.9, 646.0], [57.0, 648.0], [57.1, 649.0], [57.2, 650.0], [57.3, 652.0], [57.4, 652.0], [57.5, 653.0], [57.6, 654.0], [57.7, 655.0], [57.8, 655.0], [57.9, 656.0], [58.0, 657.0], [58.1, 657.0], [58.2, 658.0], [58.3, 658.0], [58.4, 659.0], [58.5, 660.0], [58.6, 661.0], [58.7, 661.0], [58.8, 661.0], [58.9, 662.0], [59.0, 663.0], [59.1, 664.0], [59.2, 664.0], [59.3, 665.0], [59.4, 665.0], [59.5, 666.0], [59.6, 666.0], [59.7, 667.0], [59.8, 668.0], [59.9, 668.0], [60.0, 669.0], [60.1, 669.0], [60.2, 670.0], [60.3, 671.0], [60.4, 671.0], [60.5, 672.0], [60.6, 672.0], [60.7, 673.0], [60.8, 673.0], [60.9, 674.0], [61.0, 676.0], [61.1, 677.0], [61.2, 678.0], [61.3, 678.0], [61.4, 679.0], [61.5, 680.0], [61.6, 681.0], [61.7, 681.0], [61.8, 682.0], [61.9, 683.0], [62.0, 683.0], [62.1, 684.0], [62.2, 684.0], [62.3, 685.0], [62.4, 685.0], [62.5, 686.0], [62.6, 686.0], [62.7, 687.0], [62.8, 688.0], [62.9, 690.0], [63.0, 690.0], [63.1, 691.0], [63.2, 692.0], [63.3, 692.0], [63.4, 693.0], [63.5, 694.0], [63.6, 695.0], [63.7, 696.0], [63.8, 696.0], [63.9, 696.0], [64.0, 697.0], [64.1, 697.0], [64.2, 697.0], [64.3, 699.0], [64.4, 700.0], [64.5, 701.0], [64.6, 701.0], [64.7, 706.0], [64.8, 707.0], [64.9, 708.0], [65.0, 709.0], [65.1, 710.0], [65.2, 711.0], [65.3, 711.0], [65.4, 712.0], [65.5, 712.0], [65.6, 713.0], [65.7, 713.0], [65.8, 714.0], [65.9, 714.0], [66.0, 715.0], [66.1, 715.0], [66.2, 715.0], [66.3, 716.0], [66.4, 716.0], [66.5, 717.0], [66.6, 717.0], [66.7, 717.0], [66.8, 718.0], [66.9, 718.0], [67.0, 718.0], [67.1, 719.0], [67.2, 719.0], [67.3, 719.0], [67.4, 719.0], [67.5, 720.0], [67.6, 720.0], [67.7, 720.0], [67.8, 720.0], [67.9, 721.0], [68.0, 721.0], [68.1, 721.0], [68.2, 722.0], [68.3, 722.0], [68.4, 722.0], [68.5, 723.0], [68.6, 724.0], [68.7, 725.0], [68.8, 728.0], [68.9, 735.0], [69.0, 737.0], [69.1, 739.0], [69.2, 740.0], [69.3, 741.0], [69.4, 742.0], [69.5, 743.0], [69.6, 744.0], [69.7, 748.0], [69.8, 753.0], [69.9, 757.0], [70.0, 758.0], [70.1, 759.0], [70.2, 761.0], [70.3, 761.0], [70.4, 762.0], [70.5, 767.0], [70.6, 769.0], [70.7, 771.0], [70.8, 773.0], [70.9, 775.0], [71.0, 776.0], [71.1, 777.0], [71.2, 778.0], [71.3, 781.0], [71.4, 782.0], [71.5, 787.0], [71.6, 789.0], [71.7, 791.0], [71.8, 792.0], [71.9, 792.0], [72.0, 793.0], [72.1, 793.0], [72.2, 794.0], [72.3, 795.0], [72.4, 796.0], [72.5, 797.0], [72.6, 799.0], [72.7, 799.0], [72.8, 800.0], [72.9, 801.0], [73.0, 802.0], [73.1, 802.0], [73.2, 803.0], [73.3, 804.0], [73.4, 805.0], [73.5, 806.0], [73.6, 807.0], [73.7, 809.0], [73.8, 809.0], [73.9, 811.0], [74.0, 811.0], [74.1, 812.0], [74.2, 813.0], [74.3, 814.0], [74.4, 815.0], [74.5, 815.0], [74.6, 815.0], [74.7, 816.0], [74.8, 816.0], [74.9, 816.0], [75.0, 817.0], [75.1, 817.0], [75.2, 817.0], [75.3, 818.0], [75.4, 818.0], [75.5, 818.0], [75.6, 819.0], [75.7, 819.0], [75.8, 820.0], [75.9, 821.0], [76.0, 821.0], [76.1, 826.0], [76.2, 826.0], [76.3, 829.0], [76.4, 832.0], [76.5, 833.0], [76.6, 834.0], [76.7, 835.0], [76.8, 836.0], [76.9, 837.0], [77.0, 837.0], [77.1, 837.0], [77.2, 838.0], [77.3, 838.0], [77.4, 838.0], [77.5, 839.0], [77.6, 839.0], [77.7, 840.0], [77.8, 840.0], [77.9, 840.0], [78.0, 841.0], [78.1, 842.0], [78.2, 843.0], [78.3, 843.0], [78.4, 844.0], [78.5, 844.0], [78.6, 845.0], [78.7, 845.0], [78.8, 846.0], [78.9, 847.0], [79.0, 849.0], [79.1, 851.0], [79.2, 855.0], [79.3, 858.0], [79.4, 861.0], [79.5, 862.0], [79.6, 862.0], [79.7, 863.0], [79.8, 863.0], [79.9, 864.0], [80.0, 865.0], [80.1, 866.0], [80.2, 866.0], [80.3, 867.0], [80.4, 868.0], [80.5, 869.0], [80.6, 870.0], [80.7, 872.0], [80.8, 873.0], [80.9, 874.0], [81.0, 875.0], [81.1, 876.0], [81.2, 877.0], [81.3, 881.0], [81.4, 883.0], [81.5, 883.0], [81.6, 884.0], [81.7, 885.0], [81.8, 887.0], [81.9, 889.0], [82.0, 891.0], [82.1, 892.0], [82.2, 892.0], [82.3, 893.0], [82.4, 894.0], [82.5, 895.0], [82.6, 897.0], [82.7, 897.0], [82.8, 898.0], [82.9, 899.0], [83.0, 900.0], [83.1, 901.0], [83.2, 902.0], [83.3, 903.0], [83.4, 903.0], [83.5, 906.0], [83.6, 909.0], [83.7, 910.0], [83.8, 911.0], [83.9, 912.0], [84.0, 912.0], [84.1, 913.0], [84.2, 913.0], [84.3, 914.0], [84.4, 914.0], [84.5, 915.0], [84.6, 915.0], [84.7, 916.0], [84.8, 916.0], [84.9, 916.0], [85.0, 916.0], [85.1, 917.0], [85.2, 917.0], [85.3, 917.0], [85.4, 917.0], [85.5, 918.0], [85.6, 918.0], [85.7, 919.0], [85.8, 919.0], [85.9, 919.0], [86.0, 919.0], [86.1, 919.0], [86.2, 920.0], [86.3, 920.0], [86.4, 920.0], [86.5, 920.0], [86.6, 920.0], [86.7, 921.0], [86.8, 921.0], [86.9, 921.0], [87.0, 921.0], [87.1, 921.0], [87.2, 922.0], [87.3, 922.0], [87.4, 922.0], [87.5, 922.0], [87.6, 922.0], [87.7, 923.0], [87.8, 923.0], [87.9, 923.0], [88.0, 923.0], [88.1, 923.0], [88.2, 923.0], [88.3, 923.0], [88.4, 924.0], [88.5, 924.0], [88.6, 924.0], [88.7, 925.0], [88.8, 925.0], [88.9, 926.0], [89.0, 927.0], [89.1, 928.0], [89.2, 935.0], [89.3, 938.0], [89.4, 942.0], [89.5, 943.0], [89.6, 945.0], [89.7, 947.0], [89.8, 948.0], [89.9, 948.0], [90.0, 951.0], [90.1, 952.0], [90.2, 953.0], [90.3, 955.0], [90.4, 958.0], [90.5, 958.0], [90.6, 959.0], [90.7, 960.0], [90.8, 960.0], [90.9, 961.0], [91.0, 962.0], [91.1, 963.0], [91.2, 964.0], [91.3, 966.0], [91.4, 966.0], [91.5, 967.0], [91.6, 968.0], [91.7, 971.0], [91.8, 973.0], [91.9, 974.0], [92.0, 976.0], [92.1, 977.0], [92.2, 977.0], [92.3, 977.0], [92.4, 979.0], [92.5, 983.0], [92.6, 989.0], [92.7, 994.0], [92.8, 999.0], [92.9, 1014.0], [93.0, 1017.0], [93.1, 1019.0], [93.2, 1023.0], [93.3, 1025.0], [93.4, 1027.0], [93.5, 1030.0], [93.6, 1032.0], [93.7, 1036.0], [93.8, 1038.0], [93.9, 1040.0], [94.0, 1041.0], [94.1, 1043.0], [94.2, 1044.0], [94.3, 1045.0], [94.4, 1046.0], [94.5, 1047.0], [94.6, 1047.0], [94.7, 1048.0], [94.8, 1049.0], [94.9, 1050.0], [95.0, 1052.0], [95.1, 1058.0], [95.2, 1068.0], [95.3, 1091.0], [95.4, 1105.0], [95.5, 1125.0], [95.6, 1128.0], [95.7, 1152.0], [95.8, 1153.0], [95.9, 1156.0], [96.0, 1173.0], [96.1, 1178.0], [96.2, 1179.0], [96.3, 1186.0], [96.4, 1202.0], [96.5, 1203.0], [96.6, 1204.0], [96.7, 1205.0], [96.8, 1207.0], [96.9, 1209.0], [97.0, 1212.0], [97.1, 1225.0], [97.2, 1227.0], [97.3, 1230.0], [97.4, 1237.0], [97.5, 1239.0], [97.6, 1248.0], [97.7, 1250.0], [97.8, 1253.0], [97.9, 1256.0], [98.0, 1265.0], [98.1, 1279.0], [98.2, 1328.0], [98.3, 1335.0], [98.4, 1337.0], [98.5, 1338.0], [98.6, 1341.0], [98.7, 1354.0], [98.8, 1419.0], [98.9, 1422.0], [99.0, 1496.0], [99.1, 1508.0], [99.2, 1509.0], [99.3, 1510.0], [99.4, 1514.0], [99.5, 2268.0], [99.6, 3286.0], [99.7, 4064.0], [99.8, 5066.0], [99.9, 5736.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1577.0, "series": [{"data": [[0.0, 23.0], [600.0, 1577.0], [700.0, 708.0], [800.0, 869.0], [900.0, 835.0], [1000.0, 216.0], [1100.0, 84.0], [1200.0, 150.0], [1300.0, 56.0], [1400.0, 19.0], [1500.0, 34.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 3.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [2500.0, 1.0], [2700.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 2.0], [3400.0, 2.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 2.0], [4000.0, 1.0], [4200.0, 3.0], [4300.0, 1.0], [4100.0, 1.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5000.0, 1.0], [5100.0, 2.0], [5300.0, 1.0], [5200.0, 1.0], [5400.0, 1.0], [5600.0, 2.0], [5800.0, 1.0], [5700.0, 1.0], [6100.0, 2.0], [6000.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6400.0, 2.0], [100.0, 223.0], [200.0, 297.0], [300.0, 1133.0], [400.0, 1011.0], [500.0, 1195.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5697.0, "series": [{"data": [[0.0, 2699.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5697.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 84.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.35577258458324, "minX": 1.77814434E12, "maxY": 98.90458849235249, "series": [{"data": [[1.77814434E12, 98.35577258458324], [1.7781444E12, 98.90458849235249]], "isOverall": false, "label": "Prueba Sencilla", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7781444E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 225.0, "minX": 1.0, "maxY": 3382.642857142858, "series": [{"data": [[44.0, 615.125], [46.0, 620.0], [49.0, 559.0], [48.0, 619.5], [51.0, 559.0], [53.0, 584.3333333333334], [55.0, 600.6666666666666], [56.0, 619.0], [58.0, 557.0], [61.0, 706.0], [63.0, 607.8333333333334], [62.0, 587.25], [64.0, 1895.2999999999997], [65.0, 3382.642857142858], [66.0, 2613.640000000001], [67.0, 369.0], [69.0, 981.6078431372553], [70.0, 225.0], [71.0, 370.25], [73.0, 396.0222222222222], [76.0, 621.7083333333334], [77.0, 394.25925925925924], [79.0, 524.6296296296297], [80.0, 369.00000000000006], [82.0, 598.1200000000001], [85.0, 707.2307692307693], [86.0, 799.6666666666666], [88.0, 948.1111111111111], [89.0, 903.7272727272729], [92.0, 810.7580645161288], [95.0, 677.6521739130435], [97.0, 568.5555555555555], [99.0, 701.5555555555554], [100.0, 636.0264717004917], [1.0, 999.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.53337264150939, 653.0320754716969]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5675.066666666667, "minX": 1.77814434E12, "maxY": 34977.4, "series": [{"data": [[1.77814434E12, 34977.4], [1.7781444E12, 16750.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77814434E12, 11850.266666666666], [1.7781444E12, 5675.066666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7781444E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 574.7396212672967, "minX": 1.77814434E12, "maxY": 690.5261597488653, "series": [{"data": [[1.77814434E12, 690.5261597488653], [1.7781444E12, 574.7396212672967]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7781444E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 574.7297887836862, "minX": 1.77814434E12, "maxY": 690.4794209975562, "series": [{"data": [[1.77814434E12, 690.4794209975562], [1.7781444E12, 574.7297887836862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7781444E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77814434E12, "maxY": 33.046564352982216, "series": [{"data": [[1.77814434E12, 33.046564352982216], [1.7781444E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7781444E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 82.0, "minX": 1.77814434E12, "maxY": 6468.0, "series": [{"data": [[1.77814434E12, 6468.0], [1.7781444E12, 1354.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77814434E12, 83.0], [1.7781444E12, 82.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77814434E12, 1020.0], [1.7781444E12, 840.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77814434E12, 1510.0], [1.7781444E12, 977.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77814434E12, 621.0], [1.7781444E12, 606.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77814434E12, 1204.0], [1.7781444E12, 919.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7781444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 358.0, "minX": 62.0, "maxY": 1334.0, "series": [{"data": [[62.0, 1334.0], [74.0, 644.5], [95.0, 742.0], [96.0, 883.0], [101.0, 913.5], [102.0, 918.0], [104.0, 1047.0], [105.0, 1035.0], [113.0, 661.0], [112.0, 651.5], [115.0, 614.0], [118.0, 836.0], [120.0, 868.0], [131.0, 794.0], [136.0, 758.5], [142.0, 685.0], [140.0, 586.0], [137.0, 618.0], [141.0, 681.0], [148.0, 571.5], [154.0, 389.0], [155.0, 763.0], [156.0, 546.0], [152.0, 491.0], [153.0, 713.0], [167.0, 862.0], [162.0, 595.0], [163.0, 617.0], [166.0, 486.0], [170.0, 616.0], [175.0, 669.5], [181.0, 432.0], [178.0, 533.0], [187.0, 805.0], [184.0, 626.0], [190.0, 455.0], [195.0, 612.0], [192.0, 538.0], [213.0, 489.0], [208.0, 440.5], [220.0, 508.0], [217.0, 596.0], [231.0, 358.0], [225.0, 466.0], [238.0, 465.0], [278.0, 364.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 278.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 358.0, "minX": 62.0, "maxY": 1334.0, "series": [{"data": [[62.0, 1334.0], [74.0, 643.5], [95.0, 742.0], [96.0, 883.0], [101.0, 913.5], [102.0, 918.0], [104.0, 1047.0], [105.0, 1035.0], [113.0, 661.0], [112.0, 651.5], [115.0, 614.0], [118.0, 832.0], [120.0, 868.0], [131.0, 794.0], [136.0, 758.5], [142.0, 685.0], [140.0, 586.0], [137.0, 618.0], [141.0, 681.0], [148.0, 571.5], [154.0, 389.0], [155.0, 763.0], [156.0, 546.0], [152.0, 491.0], [153.0, 713.0], [167.0, 862.0], [162.0, 595.0], [163.0, 617.0], [166.0, 486.0], [170.0, 616.0], [175.0, 669.5], [181.0, 432.0], [178.0, 533.0], [187.0, 805.0], [184.0, 626.0], [190.0, 455.0], [195.0, 612.0], [192.0, 538.0], [213.0, 489.0], [208.0, 440.5], [220.0, 508.0], [217.0, 596.0], [231.0, 358.0], [225.0, 466.0], [238.0, 465.0], [278.0, 364.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 278.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 44.1, "minX": 1.77814434E12, "maxY": 97.23333333333333, "series": [{"data": [[1.77814434E12, 97.23333333333333], [1.7781444E12, 44.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7781444E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 45.766666666666666, "minX": 1.77814434E12, "maxY": 95.56666666666666, "series": [{"data": [[1.77814434E12, 95.56666666666666], [1.7781444E12, 45.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7781444E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 45.766666666666666, "minX": 1.77814434E12, "maxY": 95.56666666666666, "series": [{"data": [[1.77814434E12, 95.56666666666666], [1.7781444E12, 45.766666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7781444E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 45.766666666666666, "minX": 1.77814434E12, "maxY": 95.56666666666666, "series": [{"data": [[1.77814434E12, 95.56666666666666], [1.7781444E12, 45.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7781444E12, "title": "Total Transactions Per Second"}},
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

