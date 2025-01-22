function Result({ bill, myRating, friendRating }) {
  let averageRating = (myRating + friendRating) / 2;
  let tip = (averageRating * +bill) / 100;
  return (
    <div id="result" className="text-lg">
      You can pay <strong className="font-extrabold">${+bill + tip}</strong> (${bill} + ${tip})
    </div>
  );
}

export default Result;
