import React from 'react';


function Keypoints({chartData}) {
    let peakAmount = -1;
    let peakDay;
    for (var i=0; i < chartData.length; i++) {
        if(chartData[i].footTraffic > peakAmount){
            peakAmount = chartData[i].footTraffic;
        }
    }
    return (
        <div>
            <p>
                Text
                <script type="text/javascript">
                document.write(peakAmount);
                </script>
            </p>
        </div>
    );
}

export default Keypoints;