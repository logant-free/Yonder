import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LocationCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  location: string;
  description: string;
  type: 'park' | 'camping';
}

const LocationCard = ({ id, name, image, rating, location, description, type }: LocationCardProps) => {
  return (
    <Link to={`/park/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium">
            {type === 'park' ? '🏞️ Park' : '⛺ Camping'}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;