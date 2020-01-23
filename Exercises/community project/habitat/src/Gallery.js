import React from "react";
import logo from "./logo.svg";
import "./index.css";
import Profile from "./Profile";
function Gallery() {
  return (
    <div>
      <Profile
        image="yel.jpeg"
        description="The Neighborhood Revitalization program serves with
      neighborhood residents and community partners to address the various
      elements that impact the quality of life which includes: health care,
      safety, and economic development"
      />

      <Profile
        image="Habi.jpg"
        description="According to Habitat for Humanity International,
              The Terwilliger Center seeks to advance the knowledge of housing
              markets through research, and creating publications and resources
              for communities to utilize. One focus of the Tewilliger Center is
              creating inclusive financing through the MicroBuild Funding.
              The MicroBuild Fund is a housing-focused microfinance investment to
              support working families. The funds provide small loans to families
              to build safe, decent, durable homes that aligns with their financial
                      capacity"
      />

      <Profile
        image="house.jpg"
        description="The idea for Habitat for Humanity originated at Koinonia Farm,
              a small Christian farming community located outside of Americus, Georgia.
              Clarence Jordan, Koinonia Farms’ founder, and Millard Fuller collaborated
              to create the idea of “partnership housing.” The idea of “partnership housing”
              allows working families to serve with volunteers to build a safe, decent,
                          affordable homes"
      />
    </div>
  );
}

export default Gallery;
