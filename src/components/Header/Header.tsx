import { ChangeEvent, useState } from "react";
import { Link } from "./components/Link/Link";
import "./header.css";

export const Header = () => {
  const [numb, setNumb] = useState(1);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setNumb(Number(event.target.value));

  return (
    <div className="header">
      <Link numero={numb} />
      <Link numero={2} />
      <Link numero={3} />
      <Link numero={4} />
      <Link numero={5} />
      <Link numero={6} />
      <Link numero={7} />
      <input type="number" onChange={changeValue} />
    </div>
  );
};
