import Image from "next/image";
import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { usePlausible } from "next-plausible";
import CTAButton from "./CTAButton";

function Ads() {
  //
  const plausible = usePlausible();
  return (
    <section className="bg-neutral text-gray-300 pt-20 lg:pt-44 flex flex-col overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-center px-10 text-center mb-20">
          <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
            Tasty <strong className="relative text-primary">food</strong> for
            <strong className="relative text-primary"> you</strong> and your
            <strong className="relative text-primary"> growing</strong> baby
          </h2>
        </div>

        <div className="flex flex-col">
          <div className="mx-auto p-2">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={"/mary.webp"}
                    alt="Mary"
                    width={40}
                    height={40}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="chat-header">
                Mary
                <time className="pl-1 text-xs opacity-50">12:40</time>
              </div>
              <div className="chat-bubble bg-white my-2 text-[#394e6a]">
                Emily! You're glowing! What's your secret? 😍
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={"/emily.webp"}
                    alt="Mary"
                    width={40}
                    height={40}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="chat-header">
                Emily
                <time className="pl-1 text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble bg-white my-2 text-[#394e6a]">
                Thanks, hun! It's this app called EnvironmentalJobBoards. Helps me eat
                right without the stress. You pregnant too?
              </div>
              <div className="chat-footer opacity-50">Seen at 12:48</div>
            </div>

            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={"/mary.webp"}
                    alt="Mary"
                    width={40}
                    height={40}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="chat-header">
                Mary
                <time className="pl-1 text-xs opacity-50">12:52</time>
              </div>
              <div className="chat-bubble bg-white my-2 text-[#394e6a]">
                Just found out last week! 🎉 Still figuring things out. Is the
                app easy to use?
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={"/emily.webp"}
                    alt="Mary"
                    width={40}
                    height={40}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="chat-header">
                Emily
                <time className="pl-1 text-xs opacity-50">12:54</time>
              </div>
              <div className="chat-bubble bg-white my-2 text-[#394e6a]">
                Congrats! 🥳 Super easy! Wanna grab lunch and I'll show you? 🥪
              </div>
              <div className="chat-footer opacity-50">Seen at 12:55</div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-8">
          <div className="card bg-[#fafafa] w-80 lg:w-1/2 shadow-xl text-[#151515] mx-auto lg:mx-14">
            <Image
              src={"/http.svg"}
              alt="HTTP Website Monitoring - environmentaljobboards.com"
              width={150}
              height={150}
              className="w-30 h-30 pl-8 pt-8"
            />
            <div className="card-body">
              <h3 className="card-title font-extrabold text-xl lg:text-2xl tracking-tight">
                Website monitoring
              </h3>
              <p className="text-lg text-neutral-500">
                Know instantly when your website goes down! Our monitoring
                alerts you before any major issues, helping you avoid downtime
                and save money.
              </p>
              <div className="card-actions">
                <button className="btn bg-[#fafafa] shadow-xl rounded-3xl w-48">
                  Website monitoring
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-[#fafafa] w-80 lg:w-1/2 shadow-xl text-[#151515] mx-auto lg:mx-14">
            <Image
              src={"/networkSwitch.svg"}
              alt="Ping Monitoring - environmentaljobboards.com"
              width={150}
              height={150}
              className="w-30 h-30 pl-8 pt-8"
            />
            <div className="card-body">
              <h3 className="card-title font-extrabold text-xl lg:text-2xl tracking-tight">
                Ping monitoring
              </h3>
              <p className="text-lg text-neutral-500">
                Stay ahead of network issues with our simple and reliable tool.
                It checks the availability of your network devices.
              </p>
              <div className="card-actions">
                <button className="btn bg-[#fafafa] shadow-xl rounded-3xl w-48">
                  Ping monitoring
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex items-center justify-center mt-20">
          <CTAButton plausibleNameBeforeLogin="GET_STARTED_ADS" />
        </div>
      </div>
    </section>
  );
}

export default Ads;
