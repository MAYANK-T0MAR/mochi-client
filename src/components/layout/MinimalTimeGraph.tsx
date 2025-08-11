import React, { useState, useMemo, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MinimalTimeGraph = ({clicksTimeDistribution}: {clicksTimeDistribution: string[]}) => {

  const [screenWidth, setScreenWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getAggregationLevel = (width: number) => {
    if (width < 480) return 'quarter'; // Very small screens
    if (width < 768) return 'month'; // Mobile
    if (width < 1024) return 'week'; // Tablet
    return 'day'; // Desktop
  };

  const processedData = useMemo(() => {
    const aggregationLevel = getAggregationLevel(screenWidth);
    const aggregated: { [key: string]: { frequency: number; fullDate: string; details: string[] } } = {};

    clicksTimeDistribution.forEach(dateStr => {
      const date = new Date(dateStr);
      let key = '';
      let fullDate = '';
      
      switch (aggregationLevel) {
        case 'quarter':
          const quarter = Math.ceil((date.getMonth() + 1) / 3);
          key = `Q${quarter} ${date.getFullYear()}`;
          fullDate = `Quarter ${quarter}, ${date.getFullYear()}`;
          break;
        case 'month':
          key = date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
          fullDate = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
          break;
        case 'week':
          const startOfWeek = new Date(date);
          startOfWeek.setDate(date.getDate() - date.getDay());
          key = startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          fullDate = `Week of ${startOfWeek.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
          break;
        default: // day
          key = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          fullDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
          break;
      }

      if (!aggregated[key]) {
        aggregated[key] = { frequency: 0, fullDate, details: [] };
      }
      
      aggregated[key].frequency += 1;
      const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      aggregated[key].details.push(`${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${timeStr}`);
    });

    // Convert to chart format and sort
    const chartData = Object.entries(aggregated).map(([period, data]) => ({
      period,
      frequency: data.frequency,
      fullDate: data.fullDate,
      details: data.details
    }));

    // Sort chronologically
    chartData.sort((a, b) => {
      const aFirstDetail = a.details[0];
      const bFirstDetail = b.details[0];
      const aDate = new Date(aFirstDetail.split(' at ')[0] + ', 2024');
      const bDate = new Date(bFirstDetail.split(' at ')[0] + ', 2024');
      return aDate.getTime() - bDate.getTime();
    });

    return chartData;
  }, [screenWidth]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg max-w-xs">
          <p className="font-semibold text-gray-900 mb-2">{data.fullDate}</p>
          <p className="text-sm text-gray-600 mb-2">Total Clicks: {data.frequency}</p>
          <div className="max-h-32 overflow-y-auto">
            <p className="text-xs text-gray-500 mb-1">Timestamps:</p>
            {data.details.slice(0, 5).map((detail: string, index: number) => (
              <p key={index} className="text-xs text-gray-700">{detail}</p>
            ))}
            {data.details.length > 5 && (
              <p className="text-xs text-gray-400 italic">+{data.details.length - 5} more...</p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Click Frequency</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={processedData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <XAxis 
              dataKey="period" 
              axisLine={false}
              tickLine={false}
              fontSize={12}
              className="text-gray-600"
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="frequency" 
              stroke="var(--foreground)" 
              strokeWidth={2}
              dot={{ fill: 'var(--foreground)', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: 'var(--ring)', strokeWidth: 2, fill: '#white' }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* <div className="mt-2 text-xs text-gray-500 text-center">
          {getAggregationLevel(screenWidth) === 'quarter' && 'Grouped by quarter'}
          {getAggregationLevel(screenWidth) === 'month' && 'Grouped by month'}
          {getAggregationLevel(screenWidth) === 'week' && 'Grouped by week'}
          {getAggregationLevel(screenWidth) === 'day' && 'Grouped by day'}
        </div> */}
      </CardContent>
    </Card>
  );
};

export default MinimalTimeGraph;