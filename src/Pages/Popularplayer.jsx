import React, { useEffect, useState } from "react";
import { getData } from "../Action/Action";
import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

const Popularplayer = () => {
  const [playerdata, setplayerdata] = useState([]);
  const get = useSelector((state) => state.users);
  const dispacth = useDispatch();

  useEffect(() => {
    if (get && get.data) {
      setplayerdata(get.data);
    }
  }, [get]);

  useEffect(() => {
    dispacth(getData());
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-5">
          <thead className="bg-green-600">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                ServerRating
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Score
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                AvgAcesPerMatch
              </th>
            </tr>
          </thead>
          <tbody>
            {playerdata.map((item) => (
              <tr key={item.id} className="border-t font-semibold">
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.PlayerId}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.PlayerName}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.ServeRating}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.FirstServePointsWonPctSortField}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.AvgAcesPerMatch}
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
