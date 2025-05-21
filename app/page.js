import Image from "next/image";
import tea from "../public/tea.gif";
export default function Home() {
  return (
    <>
      <div className="text-white flex justify-center">
        <div className="h-[44vh] w-full flex flex-col items-center justify-center gap-2">
          <h1 className="text-5xl font-bold flex items-center justify-center gap-0.5 text-center">
            Buy me A Chai
            <span>
              <Image
                className="pb-2"
                src={tea}
                alt=""
                width={88}
                height={88}
                unoptimized={true}
              />
            </span>
          </h1>
          <p className="text-lg text-center">
            A crowdfunding platform for creators. Get funded by your fans and
            followers
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Now
            </button>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* First Row */}
      <div className="bg-white w-full h-0.5 opacity-10 mb-2"></div>
      <div className="my-10">
        <h2 className="text-white font-bold text-2xl text-center">
          Your Fans can Buy you A Chai
        </h2>
        <div className="text-white flex justify-around items-center container mx-auto mt-5">
          {/* image1 */}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="bg-slate-500 rounded-full p-2.5 mb-0.5"
              src="/man.gif"
              alt=""
              width={90}
              height={90}
            />{" "}
            <p className="font-semibold ">Fund Yourself</p>
            <p className="w-3/4 text-center"></p>
          </div>
          {/* image2 */}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="bg-slate-500 rounded-full p-2.5 mb-0.5"
              src="/coin.gif"
              alt=""
              width={90}
              height={90}
            />{" "}
            <p className="font-semibold ">Fund Yourself</p>
            <p className="w-3/4 text-center">zdvsdvsdv</p>
          </div>
          {/* image3 */}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="bg-slate-500 rounded-full p-2.5 mb-0.5"
              src="/group.gif"
              alt=""
              width={90}
              height={90}
            />{" "}
            <p className="font-semibold ">Fans Want to Help</p>
            <p className="w-3/4 text-center">
              Your Fans are available for you to help
            </p>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="bg-white w-full h-0.5 opacity-10 mb-2"></div>
      <div className="my-10">
        <h2 className="text-white font-bold text-2xl text-center">
          Learn More About Us
        </h2>
        <div className="text-white flex justify-around items-center container mx-auto m-5">
          {/* image1 */}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="bg-slate-500 rounded-full p-2.5 mb-0.5"
              src="/man.gif"
              alt=""
              width={90}
              height={90}
            />{" "}
            <p className="font-semibold ">Fund Yourself</p>
            <p className="w-3/4 text-center"></p>
          </div>
          {/* image2 */}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="bg-slate-500 rounded-full p-2.5 mb-0.5"
              src="/coin.gif"
              alt=""
              width={90}
              height={90}
            />{" "}
            <p className="font-semibold ">Fund Yourself</p>
            <p className="w-3/4 text-center"></p>
          </div>
          {/* image3 */}
          <div className="flex flex-col items-center justify-center">
            <Image
              className="bg-slate-500 rounded-full p-2.5 mb-0.5"
              src="/group.gif"
              alt=""
              width={90}
              height={90}
            />{" "}
            <p className="font-semibold ">Fans Want to Help</p>
            <p className="w-3/4 text-center">
              Your Fans are available for you to help
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
