import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Clock, Calendar, Users, Trees, Camera } from 'lucide-react';

const mockParkDetails = {
  '1': {
    name: 'Yosemite National Park',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    rating: 4.9,
    location: 'California',
    description: 'Iconic national park with granite cliffs, waterfalls & diverse wildlife',
    details: {
      bestTime: 'Spring and Fall',
      avgVisitDuration: '4-5 hours',
      difficulty: 'Moderate',
      activities: ['Hiking', 'Rock Climbing', 'Photography', 'Wildlife Viewing'],
      facilities: ['Parking', 'Restrooms', 'Visitor Center', 'Camping Areas'],
    },
    images: [
      'https://images.unsplash.com/photo-1562310503-a918c4c61e38',
      'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6',
      'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d',
    ],
  },
  '2': {
    name: 'Pine Valley Campground',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    rating: 4.7,
    location: 'California',
    description: 'Scenic campground surrounded by pine forests with hiking trails',
    details: {
      bestTime: 'Summer',
      avgVisitDuration: '2-3 days',
      difficulty: 'Easy',
      activities: ['Camping', 'Hiking', 'Bird Watching', 'Fishing'],
      facilities: ['Campsite', 'Fire Pits', 'Picnic Tables', 'Water Source'],
    },
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7',
      'https://images.unsplash.com/photo-1600240644455-3edc55c375fe',
    ],
  },
};

const ParkDetails = () => {
  const { parkId } = useParams();
  const park = mockParkDetails[parkId as keyof typeof mockParkDetails];

  if (!park) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Park Not Found</h2>
          <p className="mt-2 text-gray-600">The park you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{park.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{park.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span>{park.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600 mb-6">{park.description}</p>

              <h2 className="text-2xl font-bold mb-4">Activities</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {park.details.activities.map((activity) => (
                  <div key={activity} className="flex items-center space-x-2">
                    <Trees className="h-5 w-5 text-green-600" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {park.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${park.name} gallery ${index + 1}`}
                    className="rounded-lg h-48 w-full object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Park Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Average Visit Duration</p>
                    <p className="font-medium">{park.details.avgVisitDuration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Best Time to Visit</p>
                    <p className="font-medium">{park.details.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Difficulty Level</p>
                    <p className="font-medium">{park.details.difficulty}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4">Facilities</h3>
              <div className="space-y-2">
                {park.details.facilities.map((facility) => (
                  <div key={facility} className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-gray-600" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetails;