import { useState } from "react";

const layers = [
  {
    number: 7,
    name: "Application",
    function: "Provides network services directly to user applications.",
    protocols: "HTTP, HTTPS, FTP, SMTP, DNS",
    pdu: "Data",
    example: "Web browser",
  },
  {
    number: 6,
    name: "Presentation",
    function: "Handles data translation, encryption, and compression.",
    protocols: "SSL/TLS, JPEG, MPEG",
    pdu: "Data",
    example: "Data encryption",
  },
  {
    number: 5,
    name: "Session",
    function: "Establishes, manages, and terminates communication sessions.",
    protocols: "NetBIOS, RPC",
    pdu: "Data",
    example: "Login session",
  },
  {
    number: 4,
    name: "Transport",
    function: "Provides end-to-end communication and reliability.",
    protocols: "TCP, UDP",
    pdu: "Segment / Datagram",
    example: "Reliable data delivery",
  },
  {
    number: 3,
    name: "Network",
    function: "Handles logical addressing and routing.",
    protocols: "IP, ICMP, OSPF",
    pdu: "Packet",
    example: "Router",
  },
  {
    number: 2,
    name: "Data Link",
    function: "Provides node-to-node delivery, framing, and error detection.",
    protocols: "Ethernet, Wi-Fi, ARP",
    pdu: "Frame",
    example: "Switch",
  },
  {
    number: 1,
    name: "Physical",
    function: "Transmits raw bits through the physical transmission medium.",
    protocols: "Ethernet cables, Fiber, Wi-Fi signals",
    pdu: "Bits",
    example: "Cable / Network Interface",
  },
];

const OSIModelAnimation = () => {
  // Start with Layer 7 selected
  const [selectedLayer, setSelectedLayer] = useState(7);

  const [direction, setDirection] = useState("down");

  // Find currently selected layer
  const selected = layers.find(
    (layer) => layer.number === selectedLayer
  );

  return (
    <div className="w-full">

      {/* Direction Buttons */}

      <div className="flex justify-center gap-4 mb-8">

        <button
          type="button"
          onClick={() => setDirection("down")}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            direction === "down"
              ? "bg-cyan-500"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          ⬇️ Encapsulation
        </button>

        <button
          type="button"
          onClick={() => setDirection("up")}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            direction === "up"
              ? "bg-cyan-500"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          ⬆️ Decapsulation
        </button>

      </div>


      {/* OSI MODEL */}

      <div className="max-w-2xl mx-auto space-y-3">

        {layers.map((layer) => {

          const isSelected =
            selectedLayer === layer.number;

          return (

            <button
              key={layer.number}
              type="button"
              onClick={() => {
                setSelectedLayer(layer.number);
              }}
              className={`
                w-full text-left rounded-xl p-4
                border transition-all duration-300
                cursor-pointer
                ${
                  isSelected
                    ? "bg-cyan-500 border-cyan-400 scale-[1.03]"
                    : "bg-slate-800 border-white/10 hover:border-cyan-500"
                }
              `}
            >

              <div className="flex items-center gap-4">

                {/* Layer Number */}

                <div
                  className={`
                    w-12 h-12 rounded-xl
                    flex items-center justify-center
                    font-bold text-lg
                    ${
                      isSelected
                        ? "bg-white text-cyan-600"
                        : "bg-slate-700 text-white"
                    }
                  `}
                >
                  {layer.number}
                </div>


                {/* Layer Name */}

                <div className="flex-1">

                  <p className="text-sm opacity-70">
                    Layer {layer.number}
                  </p>

                  <p className="text-xl font-bold">
                    {layer.name}
                  </p>

                </div>


                {/* Direction */}

                <span className="text-xl">
                  {direction === "down" ? "↓" : "↑"}
                </span>

              </div>

            </button>

          );

        })}

      </div>


      {/* SELECTED LAYER INFORMATION */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-xl font-bold">
            {selected.number}
          </div>

          <div>

            <p className="text-sm text-gray-400">
              Selected Layer
            </p>

            <h3 className="text-2xl font-bold text-cyan-400">
              {selected.name}
            </h3>

          </div>

        </div>


        <div className="mt-6 space-y-4">

          <div>

            <p className="text-gray-400 text-sm">
              Function
            </p>

            <p className="mt-1">
              {selected.function}
            </p>

          </div>


          <div>

            <p className="text-gray-400 text-sm">
              Protocols / Technologies
            </p>

            <p className="mt-1">
              {selected.protocols}
            </p>

          </div>


          <div>

            <p className="text-gray-400 text-sm">
              PDU
            </p>

            <p className="mt-1 font-semibold text-cyan-400">
              {selected.pdu}
            </p>

          </div>


          <div>

            <p className="text-gray-400 text-sm">
              Example
            </p>

            <p className="mt-1">
              {selected.example}
            </p>

          </div>

        </div>

      </div>


      {/* DATA FLOW */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Data Flow
        </h3>

        <p className="text-gray-400 mt-3">

          {direction === "down"
            ? "Data moves downward through the OSI layers during encapsulation."
            : "Data moves upward through the OSI layers during decapsulation."}

        </p>

        <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">

          {(direction === "down"
            ? layers
            : [...layers].reverse()
          ).map((layer) => (

            <span
              key={layer.number}
              className={`
                px-4 py-2 rounded-lg
                ${
                  selectedLayer === layer.number
                    ? "bg-cyan-500"
                    : "bg-slate-700"
                }
              `}
            >
              {layer.number}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
};

export default OSIModelAnimation;