import { IoBed } from "react-icons/io5";
import { GiKitchenTap, GiKnifeFork, GiSofa } from "react-icons/gi";

export function SelectRoomIcon(id, givenSize, givenColor) {
  switch (id) {
    // living room
    case 1:
      return <GiSofa size={givenSize} color={givenColor} />;
    // bed-room
    case 2:
      return <IoBed size={givenSize} color={givenColor} />;
    // kitchen
    case 3:
      return <GiKitchenTap size={givenSize} color={givenColor} />;
    // dining room
    case 4:
      return <GiKnifeFork size={givenSize} color={givenColor} />;
  }
}
