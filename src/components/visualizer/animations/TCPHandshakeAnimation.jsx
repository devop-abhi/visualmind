import { useState } from "react";

const TCPHandshakeAnimation = () => {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState(
    "Click Start Handshake to establish a TCP connection."
  );

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const startHandshake = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setStep(0);

    setMessage("Client is ready to establish a connection.");

    await sleep(2000);

    // Step 1
    setStep(1);
    setMessage("Client → Server : SYN");

    await sleep(2500);

    // Step 2
    setStep(2);
    setMessage("Server → Client : SYN + ACK");

    await sleep(2500);

    // Step 3
    setStep(3);
    setMessage("Client → Server : ACK");

    await sleep(2500);

    // Connection established
    setStep(4);
    setMessage(
      "🎉 TCP Connection Established!"
    );

    setIsRunning(false);
  };

  const reset = () => {
    setStep(0);
    setIsRunning(false);
    setMessage(
      "Click Start Handshake to establish a TCP connection."
    );
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          onClick={startHandshake}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          🤝 Start Handshake
        </button>

        <button
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Connection Status */}

      <div className="text-center mb-8">

        <span
          className={`
            inline-block px-6 py-3 rounded-full font-semibold
            ${
              step === 4
                ? "bg-green-500/20 text-green-400"
                : "bg-slate-700 text-gray-300"
            }
          `}
        >
          {step === 4
            ? "● CONNECTION ESTABLISHED"
            : "● CONNECTION NOT ESTABLISHED"}
        </span>

      </div>

      {/* Client / Server */}

      <div className="relative max-w-4xl mx-auto">

        <div className="grid grid-cols-2 gap-16">

          {/* Client */}

          <div className="text-center">

            <div
              className={`
                w-40 h-40 mx-auto rounded-2xl
                flex flex-col items-center justify-center
                border-2 transition-all duration-500
                ${
                  step === 1 || step === 3
                    ? "border-cyan-400 bg-cyan-500/20 scale-105 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-slate-800"
                }
              `}
            >

              <span className="text-5xl">
                💻
              </span>

              <span className="mt-3 font-bold text-xl">
                Client
              </span>

            </div>

          </div>

          {/* Server */}

          <div className="text-center">

            <div
              className={`
                w-40 h-40 mx-auto rounded-2xl
                flex flex-col items-center justify-center
                border-2 transition-all duration-500
                ${
                  step === 2
                    ? "border-cyan-400 bg-cyan-500/20 scale-105 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-slate-800"
                }
              `}
            >

              <span className="text-5xl">
                🖥️
              </span>

              <span className="mt-3 font-bold text-xl">
                Server
              </span>

            </div>

          </div>

        </div>

        {/* Message Animation Area */}

        <div className="mt-10 min-h-[150px] relative">

          {/* SYN */}

          {step >= 1 && (
            <div
              className={`
                absolute left-[18%] top-0
                transition-all duration-700
                ${
                  step === 1
                    ? "opacity-100 translate-x-[170px]"
                    : "opacity-40"
                }
              `}
            >

              <div className="bg-cyan-500 px-5 py-3 rounded-xl font-bold shadow-lg">
                SYN →
              </div>

            </div>
          )}

          {/* SYN ACK */}

          {step >= 2 && (
            <div
              className={`
                absolute right-[18%] top-[55px]
                transition-all duration-700
                ${
                  step === 2
                    ? "opacity-100 -translate-x-[170px]"
                    : "opacity-40"
                }
              `}
            >

              <div className="bg-purple-500 px-5 py-3 rounded-xl font-bold shadow-lg">
                ← SYN + ACK
              </div>

            </div>
          )}

          {/* ACK */}

          {step >= 3 && (
            <div
              className={`
                absolute left-[18%] top-[110px]
                transition-all duration-700
                ${
                  step === 3
                    ? "opacity-100 translate-x-[170px]"
                    : "opacity-40"
                }
              `}
            >

              <div className="bg-green-500 px-5 py-3 rounded-xl font-bold shadow-lg">
                ACK →
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Current Step */}

      <div className="mt-10 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          TCP Handshake
        </h3>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

      </div>

      {/* Steps */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div
          className={`
            p-5 rounded-2xl text-center transition
            ${
              step >= 1
                ? "bg-cyan-500/20 border border-cyan-500"
                : "bg-slate-800"
            }
          `}
        >

          <div className="text-2xl font-bold">
            1
          </div>

          <p className="font-semibold mt-2">
            SYN
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Client requests a connection
          </p>

        </div>

        <div
          className={`
            p-5 rounded-2xl text-center transition
            ${
              step >= 2
                ? "bg-purple-500/20 border border-purple-500"
                : "bg-slate-800"
            }
          `}
        >

          <div className="text-2xl font-bold">
            2
          </div>

          <p className="font-semibold mt-2">
            SYN + ACK
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Server accepts the request
          </p>

        </div>

        <div
          className={`
            p-5 rounded-2xl text-center transition
            ${
              step >= 3
                ? "bg-green-500/20 border border-green-500"
                : "bg-slate-800"
            }
          `}
        >

          <div className="text-2xl font-bold">
            3
          </div>

          <p className="font-semibold mt-2">
            ACK
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Client confirms the connection
          </p>

        </div>

      </div>

      {/* Explanation */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How TCP 3-Way Handshake Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">

          TCP uses a three-step handshake to establish a
          reliable connection between a client and server.
          The client first sends a SYN packet, the server
          responds with SYN + ACK, and finally the client
          sends an ACK. After these three steps, the TCP
          connection is established.

        </p>

      </div>

    </div>
  );
};

export default TCPHandshakeAnimation;