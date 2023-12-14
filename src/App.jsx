import React, { useState } from "react";
import "./App.css";
import { FaCheckCircle } from "react-icons/fa";

const App = () => {
  const [selectedChallenge, setSelectedChallenge] = useState("null");
  const [selectedAccountSize, setSelectedAccountSize] = useState("");
  const [TotalPrie, setTotalPrie] = useState("");

  // const calculateTotal = () => {
  //   const challengePrice = selectedChallenge === "One Step" ? 52 : 32;
  //   const accountSizePrice = selectedAccountSize === "$5,000" ? 1 : 0;
  //   return challengePrice + accountSizePrice;
  // };
  const handleChallengeClick = (challengeType) => {
    setSelectedChallenge(challengeType);
  };
  const handleAccountSizeClick = (accountSize) => {
    setSelectedAccountSize(accountSize);
    if (selectedChallenge === "One Step" && accountSize === "$5,000") {
      setTotalPrie(52);
    } else if (selectedChallenge === "Two Step" && accountSize === "$5,000") {
      setTotalPrie(32);
    }
    if (selectedChallenge === "One Step" && accountSize === "$10,000") {
      setTotalPrie(109);
    } else if (selectedChallenge === "Two Step" && accountSize === "$10,000") {
      setTotalPrie(89);
    }
    if (selectedChallenge === "One Step" && accountSize === "$25,000") {
      setTotalPrie(210);
    } else if (selectedChallenge === "Two Step" && accountSize === "$25,000") {
      setTotalPrie(150);
    }
    if (selectedChallenge === "One Step" && accountSize === "$50,000") {
      setTotalPrie(349);
    } else if (selectedChallenge === "Two Step" && accountSize === "$50,000") {
      setTotalPrie(279);
    }
    if (selectedChallenge === "One Step" && accountSize === "$100,000") {
      setTotalPrie(550);
    } else if (selectedChallenge === "Two Step" && accountSize === "$100,000") {
      setTotalPrie(490);
    }
    if (selectedChallenge === "One Step" && accountSize === "$150,000") {
      setTotalPrie(640);
    } else if (selectedChallenge === "Two Step" && accountSize === "$150,000") {
      setTotalPrie(560);
    }
    if (selectedChallenge === "One Step" && accountSize === "$200,000") {
      setTotalPrie(849);
    } else if (selectedChallenge === "Two Step" && accountSize === "$200,000") {
      setTotalPrie(729);
    }
    if (selectedChallenge === "One Step" && accountSize === "$300,000") {
      setTotalPrie(1110);
    } else if (selectedChallenge === "Two Step" && accountSize === "$300,000") {
      setTotalPrie(910);
    }
    if (selectedChallenge === "One Step" && accountSize === "$400,000") {
      setTotalPrie(1639);
    } else if (selectedChallenge === "Two Step" && accountSize === "$400,000") {
      setTotalPrie(1430);
    }
  };
  return (
    <>
      <div>
        <div className="bg-gray-300 w-[full] h-20px">
          <h1 className="text-[24px] font-montserrat text-blue-800 font-bold text-center">
            <img src="" alt="" />
            FIRMITY FUNDING
          </h1>
          <p className="text-[14px] font-montserrat text-blue-800 text-center">
            The Future of Prop Firms
          </p>
        </div>
        <div>
          <div
            className={
              selectedAccountSize === ""
                ? "w-[full] h-screen bac"
                : "md:w-[full] h-full bac"
            }
          >
            <div className="pt-[30px]">
              <p className="text-white font-montserrat text-center text-[17px] md:text-[22px] md:text-start md:ml-[50px]">
                Choose Your Challenge
              </p>
              <div className="grid grid-cols-2 px-10 pt-[20px] md:w-[500px] ml-[8px]">
                <button
                  onClick={() => handleChallengeClick("One Step")}
                  className={`w-32 rounded-sm h-7 border-2 border-white font-montserrat hover:bg-blue-800 hover:text-white transition-transform duration-200 ease-in-out transform hover:scale-110 text-blue-800 bg-gray-400 ${
                    selectedChallenge === "One Step"
                      ? "bg-blue-800 text-white"
                      : ""
                  }`}
                >
                  One Step
                </button>
                <button
                  onClick={() => handleChallengeClick("Two Step")}
                  className={`w-32 rounded-sm h-7 border-2 border-white font-montserrat hover:bg-blue-800 hover:text-white transition-transform duration-200 ease-in-out transform hover:scale-110 text-blue-800 bg-gray-400 ${
                    selectedChallenge === "Two Step"
                      ? "bg-blue-800 text-white"
                      : ""
                  }`}
                >
                  Two Step
                </button>
              </div>
              <div className="pt-[20px]">
                <p className="text-white font-montserrat text-[17px] ml-[50px] md:text-[22px]">
                  Account Size
                </p>
                <div>
                  <div className="grid grid-cols-5 px-[25px] mr-[9px] gap-8 p-4 md:grid-cols-5 md:ml-[15px]">
                    <button
                      onClick={() => handleAccountSizeClick("$5,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[13px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $5,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$10,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[13px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $10,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$25,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[13px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $25,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$50,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[13px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $50,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$100,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[12px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $100,000
                    </button>
                  </div>
                  <div className="grid grid-cols-5 px-[25px] mr-[9px] gap-16 md:gap-8 md:grid-cols-5 md:ml-[15px]">
                    <button
                      onClick={() => handleAccountSizeClick("$150,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[12px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $150,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$200,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[12px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $200,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$300,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[12px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $300,000
                    </button>
                    <button
                      onClick={() => handleAccountSizeClick("$400,000")}
                      className="w-[65px] md:w-20 rounded-full h-7 text-[12px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-montserrat shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                    >
                      $400,000
                    </button>
                  </div>
                </div>
                <div className="mt-10 flex justify-center">
                  {selectedChallenge === "One Step" && selectedAccountSize ? (
                    <div className="container w-full">
                      <div className="mx-auto w-fit">
                        <table className="w-4/5 mx-auto md:w-full border rounded-md max-h-48 overflow-auto bg-white shadow-md ">
                          <thead>
                            <tr className="bg-blue-800 text-white">
                              <th className="border-2 py-2 px-4 text-white rounded-md font-montserrat">
                                Rules
                              </th>
                              <th className="border-2 py-2 px-4  text-white rounded-md text-[12px] font-montserrat">
                                Beginner Trader
                              </th>
                              <th className="border-2 py-2 px-4 text-white rounded-md text-[12px] font-montserrat">
                                Standard Trader
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="py-8">
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat ">
                                Daily drawdown
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                8%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                6%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                Max drawdown
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                12%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                10%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4  text-gray-700 font-montserrat">
                                Phase 1
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                8%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                10%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                Profit Split
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                70/30
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                85/15
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-[13px]">
                                Mininimum trading days
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                3
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                3
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-[14px]">
                                News trading
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-[14px]">
                                Weekend holding
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="flex items-center ml-[150px] min-[375px]:ml-[160px] min-[414px]:ml-[185px] min-[390px]:ml-[170px] min-[428px]:ml-[195px] min-[430px]:ml-[200px] md:ml-[220px] md:gap-14 lg:ml-[220px] lg:gap-[55px] gap-4 mt-2">
                          <button className="w-20 h-7 rounded bg-green-400 text-black text-xs">Choose</button>
                          <button className="w-20 h-7 rounded bg-green-400 text-black text-xs">Choose</button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="mt-10 flex justify-center">
                  {selectedChallenge === "Two Step" && selectedAccountSize ? (
                    <div className="container w-full">
                      <div className="mx-auto w-fit">
                        <table className="w-4/5 mx-auto md:w-full border rounded-md max-h-48 overflow-auto bg-white shadow-md ">
                          <thead>
                            <tr className="bg-blue-800 text-white">
                              <th className="border-2 py-2 px-4 text-white rounded-md font-montserrat">
                                Rules
                              </th>
                              <th className="border-2 py-2 px-4  text-white rounded-md text-[12px] font-montserrat">
                                Beginner Trader
                              </th>
                              <th className="border-2 py-2 px-4 text-white rounded-md text-[12px] font-montserrat">
                                Standard Trader
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="py-8">
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat ">
                                Daily drawdown
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                8%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                6%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                Max drawdown
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                12%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 text-center font-montserrat">
                                10%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4  text-gray-700 font-montserrat">
                                Phase 1
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                8%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                10%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4  text-gray-700 font-montserrat">
                                Phase 2
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                4%
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                5%
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                Profit Split
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                70/30
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                85/15
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-[13px]">
                                Mininimum trading days
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                3
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-center">
                                3
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-[14px]">
                                News trading
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat text-[14px]">
                                Weekend holding
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                              <td className="border-2 py-2 px-4 text-gray-700 font-montserrat">
                                <p className="flex justify-center">
                                  <FaCheckCircle />
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="flex items-center ml-[150px] min-[375px]:ml-[160px] min-[414px]:ml-[185px] min-[390px]:ml-[170px] min-[428px]:ml-[195px] min-[430px]:ml-[200px] md:ml-[220px] md:gap-14 lg:ml-[220px] lg:gap-[55px] gap-4 mt-2">
                          <button className="w-20 h-7 rounded bg-green-400 text-black text-xs">Choose</button>
                          <button className="w-20 h-7 rounded bg-green-400 text-black text-xs">Choose</button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="pb-8">
                  {TotalPrie ? (
                    <p className="text-white mt-3 font-montserrat font-bold text-[19px] ml-24 md:flex justify-center md:mr-64">
                      Total : ${TotalPrie}
                    </p>
                  ) : null}
                  <div className="flex justify-center">
                    <button className="w-36 h-8 bg-green-400 rounded mt-5 border-2 border-white text-white font-montserrat text-[14px] transition-transform duration-200 ease-in-out transform hover:scale-90">
                      Complete Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 w-[full] h-20px">
            <p className="text-[14px] font-montserrat text-blue-800 text-center">
              © 2023 Firmity Funding. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
