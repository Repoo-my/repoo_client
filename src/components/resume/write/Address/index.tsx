import DaumPostcode from "react-daum-postcode";

interface AddressProps {
  onComplete: (roadAddress: string) => void;
}

function Address({ onComplete }: AddressProps) {
  const completeHandler = ({ roadAddress }: { roadAddress: string }) => {
    onComplete(roadAddress);
  };

  return (
    <div>
      <DaumPostcode onComplete={completeHandler} />
    </div>
  );
}

export default Address;
