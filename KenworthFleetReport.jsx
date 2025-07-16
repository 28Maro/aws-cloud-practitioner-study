import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import {
  Truck, TrendingUp, Calendar, Users, Activity, Award,
  BarChart3, Target, Clock, Settings
} from 'lucide-react';

const KenworthFleetReport = () => {
  // Datos reales
  const summaryMetrics = {
    totalTrips: 57699,
    totalFleetSize: 1837,
    activeUnits: 1730,
    avgTripsPerUnit: 33.4,
    reportPeriod: '2024-2025'
  };

  const topTrucksData = [
    { plate: '50***9', trips: 681, year: 2014, rank: 1, age: 11 },
    { plate: '51***9', trips: 539, year: 2014, rank: 2, age: 11 },
    { plate: '42***5', trips: 388, year: 2003, rank: 3, age: 22 },
    { plate: '27***5', trips: 382, year: 2000, rank: 4, age: 25 },
    { plate: '68***B', trips: 367, year: 2000, rank: 5, age: 25 },
    { plate: '44***G', trips: 355, year: 2024, rank: 6, age: 1 },
    { plate: '39***6', trips: 338, year: 2023, rank: 7, age: 2 },
    { plate: '47***1', trips: 330, year: 2003, rank: 8, age: 22 },
    { plate: '73***4', trips: 325, year: 1994, rank: 9, age: 31 },
    { plate: '33***7', trips: 309, year: 1998, rank: 10, age: 27 },
    { plate: '20***Y', trips: 293, year: 2013, rank: 11, age: 12 },
    { plate: '57***P', trips: 260, year: 2000, rank: 12, age: 25 },
    { plate: '59***R', trips: 230, year: 2024, rank: 13, age: 1 },
    { plate: '19***9', trips: 222, year: 2019, rank: 14, age: 6 },
    { plate: '61***R', trips: 210, year: 2024, rank: 15, age: 1 },
    { plate: '03***2', trips: 201, year: 1993, rank: 16, age: 32 },
    { plate: '05***F', trips: 198, year: 2024, rank: 17, age: 1 },
    { plate: '47***A', trips: 197, year: 2018, rank: 18, age: 7 },
    { plate: '63***R', trips: 188, year: 2024, rank: 19, age: 1 },
    { plate: '33***N', trips: 187, year: 2000, rank: 20, age: 25 }
  ];

  const fleetByYearData = [
    { period: '1987-1999', units: 38, totalTrips: 1695, avgTrips: 44.6, description: 'Legacy Models', color: '#8B5CF6' },
    { period: '2000-2009', units: 325, totalTrips: 13762, avgTrips: 42.3, description: 'Millennium Models', color: '#06B6D4' },
    { period: '2010-2015', units: 628, totalTrips: 13508, avgTrips: 21.5, description: 'Expansion Models', color: '#10B981' },
    { period: '2016-2020', units: 347, totalTrips: 12046, avgTrips: 34.7, description: 'Modern Models', color: '#F59E0B' },
    { period: '2021-2025', units: 303, totalTrips: 14227, avgTrips: 47.0, description: 'Latest Models', color: '#EF4444' }
  ];

  const distributionData = [
    { name: '1987-1999\nLegacy', value: 38, percentage: 2.2, color: '#8B5CF6' },
    { name: '2000-2009\nMillennium', value: 325, percentage: 18.8, color: '#06B6D4' },
    { name: '2010-2015\nExpansion', value: 628, percentage: 36.3, color: '#10B981' },
    { name: '2016-2020\nModern', value: 347, percentage: 20.1, color: '#F59E0B' },
    { name: '2021-2025\nLatest', value: 303, percentage: 17.5, color: '#EF4444' }
  ];

  const agePerformanceData = topTrucksData.map(truck => ({
    ...truck,
    ageGroup:
      truck.age <= 5 ? 'New (0-5 years)' :
      truck.age <= 15 ? 'Mature (6-15 years)' :
      'Veteran (15+ years)'
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Executive Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Truck className="w-16 h-16 text-red-500 mr-4" />
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">KENWORTH FLEET</h1>
              <h2 className="text-3xl font-semibold text-blue-300">
                COMPREHENSIVE PERFORMANCE ANALYSIS
              </h2>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 inline-block">
            <p className="text-xl text-gray-200">
              Fleet Analysis by Unit Year & Performance Metrics
            </p>
            <p className="text-lg text-gray-300 mt-1">
              Detailed breakdown of {summaryMetrics.totalFleetSize.toLocaleString()} total KENWORTH trucks
            </p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-md rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-12 h-12 text-green-400" />
              <div className="text-right">
                <p className="text-green-200 text-sm font-medium">TOTAL OPERATIONS</p>
                <p className="text-4xl font-bold text-white">
                  {summaryMetrics.totalTrips.toLocaleString()}
                </p>
                <p className="text-green-300 text-sm">Completed Trips</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-md rounded-xl p-6 border border-blue-400/20">
            <div className="flex items-center justify-between mb-3">
              <Truck className="w-12 h-12 text-blue-400" />
              <div className="text-right">
                <p className="text-blue-200 text-sm font-medium">TOTAL FLEET</p>
                <p className="text-4xl font-bold text-white">
                  {summaryMetrics.totalFleetSize.toLocaleString()}
                </p>
                <p className="text-blue-300 text-sm">KENWORTH Trucks</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 backdrop-blur-md rounded-xl p-6 border border-yellow-400/20">
            <div className="flex items-center justify-between mb-3">
              <Activity className="w-12 h-12 text-yellow-400" />
              <div className="text-right">
                <p className="text-yellow-200 text-sm font-medium">EFFICIENCY</p>
                <p className="text-4xl font-bold text-white">
                  {summaryMetrics.avgTripsPerUnit}
                </p>
                <p className="text-yellow-300 text-sm">Avg Trips per Unit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Performance & Distribution Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Fleet Performance by Model Year</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Average trips per unit by truck model year period
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={fleetByYearData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="period"
                  stroke="#9CA3AF"
                  fontSize={11}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  formatter={(value, name) => [
                    name === 'avgTrips'
                      ? `${value} avg trips/unit`
                      : name === 'units'
                      ? `${value} units`
                      : name === 'totalTrips'
                      ? `${value.toLocaleString()} total trips`
                      : value,
                    name === 'avgTrips'
                      ? 'Average Performance'
                      : name === 'units'
                      ? 'Fleet Size'
                      : 'Total Operations'
                  ]}
                />
                <Bar dataKey="avgTrips" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                  {fleetByYearData.map((entry, index) => (
                    <text
                      key={index}
                      x={`${(index + 0.5) * (100 / fleetByYearData.length)}%`}
                      y={entry.avgTrips > 30 ? entry.avgTrips - 3 : entry.avgTrips + 8}
                      fill="white"
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {entry.totalTrips.toLocaleString()}
                    </text>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Fleet Distribution by Model Year</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Breakdown of fleet by truck model year periods
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  label={({ name, percentage }) => `${name}\n${percentage}%`}
                  labelLine={false}
                  fontSize={10}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.9)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  formatter={(value) => [
                    `${value} units (${distributionData.find(d => d.value === value)?.percentage}%)`,
                    'Fleet Size'
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Elite Performance Analysis */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Elite Performance Analysis</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Top 10 units with model year and performance metrics
          </p>
          <div className="space-y-3">
            {topTrucksData.slice(0, 10).map((truck, index) => (
              <div
                key={truck.plate}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 ${
                      index === 0
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                        : index === 1
                        ? 'bg-gradient-to-r from-gray-400 to-gray-600'
                        : index === 2
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-800'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}
                  >
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : truck.rank}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{truck.plate}</p>
                    <p className="text-gray-400 text-sm">
                      {truck.year} Model • {truck.age} years old
                    </p>
                    <p className="text-gray-500 text-xs">
                      {truck.age <= 5 ? '🟢 New Model' :
                       truck.age <= 15 ? '🟡 Mature Model' :
                       '🔴 Veteran Model'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl">{truck.trips.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">trips</p>
                  <p className="text-xs text-gray-500">
                    {(truck.trips / summaryMetrics.avgTripsPerUnit).toFixed(1)}x avg
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Intelligence & Strategic Insights */}
        <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/50 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-8">
          <div className="flex items-center mb-6">
            <Settings className="w-8 h-8 text-blue-400 mr-4" />
            <h3 className="text-3xl font-bold text-white">
              Fleet Intelligence & Strategic Insights
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-2">🎯 Fleet Utilization</h4>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">
                  {Math.round((summaryMetrics.activeUnits / summaryMetrics.totalFleetSize) * 100)}%
                </strong> fleet utilization rate
              </p>
              <p className="text-gray-300 text-sm mt-1">
                {summaryMetrics.activeUnits} of {summaryMetrics.totalFleetSize} units active
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-2">🏆 Champion Performance</h4>
              <p className="text-gray-300 text-sm">
                Unit <strong className="text-white">{topTrucksData[0].plate}</strong> leads with{' '}
                <strong className="text-white">{topTrucksData[0].trips}</strong> trips
              </p>
              <p className="text-gray-300 text-sm mt-1">
                {topTrucksData[0].year} model, {topTrucksData[0].age} years in service
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-2">📈 Era Performance</h4>
              <p className="text-gray-300 text-sm">
                <strong className="text-white">2021-2025</strong> units show highest efficiency
              </p>
              <p className="text-gray-300 text-sm mt-1">
                47.0 average trips per latest generation unit
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-2">🚛 Fleet Composition</h4>  
              <p className="text-gray-300 text-sm">
                <strong className="text-white">36.3%</strong> expansion era fleet (2010-2015)
              </p>
              <p className="text-gray-300 text-sm mt-1">
                Largest segment with 628 units
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-gray-300 text-sm mb-2">
              <strong className="text-white">Security Notice:</strong> All vehicle plates have been masked for confidentiality
            </p>
            <p className="text-gray-400 text-xs">
              Analysis based on {summaryMetrics.totalTrips.toLocaleString()} completed trips across {summaryMetrics.activeUnits} active units
            </p>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-3">
              <Award className="w-6 h-6 text-yellow-400 mr-3" />
              <h4 className="text-white font-semibold">Performance Leader</h4>
            </div>
            <p className="text-yellow-400 text-2xl font-bold">
              Unit {topTrucksData[0].plate}
            </p>
            <p className="text-gray-300 text-sm">
              {topTrucksData[0].trips} trips • {topTrucksData[0].year} model
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {((topTrucksData[0].trips / summaryMetrics.avgTripsPerUnit) * 100 - 100).toFixed(0)}% above fleet average
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-3">
              <Clock className="w-6 h-6 text-green-400 mr-3" />
              <h4 className="text-white font-semibold">Model Year Span</h4>
            </div>
            <p className="text-green-400 text-2xl font-bold">38 Years</p>
            <p className="text-gray-300 text-sm">From 1987 to 2025 models</p>
            <p className="text-gray-400 text-xs mt-1">Diverse model range with proven reliability</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/*/}
        </div>
      </div>
    </div>
  );
};

export default KenworthFleetReport;
