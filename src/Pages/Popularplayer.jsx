import React, { useEffect, useState } from "react";
import { getData } from "../Action/Action";
import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

const Popularplayer = () => {
  const get = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [playerdata, setplayerdata] = useState([]);

  useEffect(() => {
    console.log("Redux State:", get);
    if (get && Array.isArray(get.data)) {
      setplayerdata(get.data);
    } else {
      setplayerdata([]); 
    }
  }, [get]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (!Array.isArray(playerdata)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-5">
          <thead className="bg-green-600">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                player_Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                player_Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Country
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Player_image
              </th>
            </tr>
          </thead>
          <tbody>
            {playerdata.map((item) => (
              <tr key={item.id} className="border-t font-semibold">
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.player_id}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.name}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.country}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.rating}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  <img src={item.img}  className="w-[150px]"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Popularplayer;
