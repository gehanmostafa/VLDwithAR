
import { Button } from '@/components/ui/button';
import React from 'react';


export default function Page() {
  return (
    <div className="bg-teal-500 min-h-[70vh]  py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <img
              src="/a-well-lit-cozy-dorm-room-with-a-single-bed-covered-in-a-gre-d64313a2ce5783067d1ad5f093a9113f.avif"
                  alt={`Product ${index + 1}`}
                  className="w-full rounded"
                />
                <h3 className="text-xl font-bold mt-4">Product {index + 1}</h3>
              </div>
            ))}

          </div>
          <div className="col-span-1 md:col-span-1 flex  flex-col justify-center items-center">
            <img
              src="/a-well-lit-cozy-dorm-room-with-a-single-bed-covered-in-a-gre-d64313a2ce5783067d1ad5f093a9113f.avif"
              alt="Main Product"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-10 flex justify-center gap-4">
              < Button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
                3D
              </Button>
              <Button className="px-6 py-2 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
