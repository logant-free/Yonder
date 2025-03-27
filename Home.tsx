import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import LocationCard from '../components/LocationCard';

const mockLocations = [
  {
    id: 1,
    type: 'park',
    name: 'Yosemite National Park',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    rating: 4.9,
    location: 'California',
    description: 'Iconic national park with granite cliffs, waterfalls & diverse wildlife',
  },
  {
    id: 2,
    type: 'camping',
    name: 'Pine Valley Campground',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    rating: 4.7,
    location: 'California',
    description: 'Scenic campground surrounded by pine forests with hiking trails',
  },
  // Add more mock locations as needed
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Your Next Adventure
        </h1>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search locations..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockLocations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  );
}

export default Home;