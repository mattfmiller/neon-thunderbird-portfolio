import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Div = styled.div({
  width: 550,
  height: 550,
});

export const CollectionItem: React.FC = () => {
  return (
    <Div>
      <div>This will be a collection</div>
      <Image
        src="https://lh3.googleusercontent.com/lPwCAbHLvB6-nbFH4bZCeyVXukn-JSIIBxVV4th76FHqaE-OZ-YtHkeOglnfedJ-sozWw76QYgeoLtVHds-M1nBu65o301Y2FmuEb6W4Y3zpd-rAf7I3QgyhJW8S2v9Ngd6KnMbCkhYG_VZ9K6bTRfmUcXJZUQXPRR14ne43hB3fTM01OQh2AvnUIBgxB3asP1T-py9Dz4Quw0D-TOCq2FbehdNZXD_rkUI-vLuF5PMBFsgUayYAyjF4yZQSCAgCSP5mJTgDT0tgHL4NkyWiYoxI65xWZh3NTk2Oklxd1MugLWzPvZ6LYUVobiSwKq9SZvmKSpRqfjwZiC4weB6otv-Gzw-pRp237vwZp5jj9u6TL5B7oZn_vbPCO2bKtp7DvfiMwXO65G85nvSBFa3KwET-eAgEjBMLm60VxSWluseOLwrTemprHJjSYfne5xesHzN-ZtNn33y05K_oqiY-VvhnNwfyhXpUNlQPz1L3oNAvw1Qq4t94I1NH33d2rQED-MYixIU1Cmk0jZ3CeL70KjmSvAUB_PGsEiQL_VJqlu999gZYybQfweTGDOOa8OZoSLXm5bCVw2QNAWvyMqetQev3I-gKkBQZX_B3ptizbHb1oMybfZrqVeO_MRxRWX99110V4makDQ7yCJw_bP67LrCrjLa-LOJscjQv7wwVfTcqUyYm5lH5ruapa6WzaWRh67v6u_QB6mBiMTDpkvqSVt4z=w2964-h2390-no?authuser=0"
        alt="mountian pic"
        width="500"
        height="500"
        objectFit="contain"
      />
      <Link href="/">Go Back</Link>
    </Div>
  );
};

export default CollectionItem;
