/* eslint-disable react/prop-types */

export default function IconColor({ icon, color }) {
  return <div className={`w-max p-2 rounded-md ${color}`}>{icon}</div>;
}
