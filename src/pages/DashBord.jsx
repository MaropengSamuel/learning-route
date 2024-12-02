import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

function Dashobord(){
    const options = {
        title: {
            text: 'My stock chart'
          },
          series: [
            {
              data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
            }
          ]
      };
return <div>
     <HighchartsReact 
     highcharts={Highcharts} 
     options={options} 
    
     />
</div>
}

export default  Dashobord;