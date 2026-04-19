import { LockKeyholeIcon as Lock, WifiSync as Sync } from "lucide-react";

const Features = () => {
  return (
    <section id="Features" className="features">
      <h1>
        ENGINEERED FOR <span className="text-purple-400">ELITES</span>
      </h1>
      <p className="md:w-1/2 max-w-1/2 w-2xs mx-auto text-gray-400 mb-20 text-center">
        High-performance communication requires more than just pixels. It
        requires a philosophy of power.
      </p>

      <div className="bento">
        <div className="col-span-3 w-full h-full relative">
          <div
            className="bg-gray-600 
            bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjWABi3ZRInLyy_R-LkdD06hoAMvTGlf6UriXw_MwJiLmhiodiq9f4gp8T_-M-jR4pHYyMmm2LSC247Jq9JDaSA3a5x-H0Bd9lekGUCctDh5YcXK1fJekZnFW0n-urW7j9NLikCq9nfSKz6A7bbQDTU_tsjhSk6o-cDTRmaQM2fjrhw4KOJjLd-9VE1du1-4ZscZ6Eh_1zIhN8e7xPfjxHzyJDvcCwQhyeMLF_Gy966wYqs35SsIOCL6rVTat-mjgFeCFWOnbk')] bg-blend-multiply absolute w-full h-full object-center object-cover self-center bg-no-repeat bg-center bg-cover grayscale-75 rounded-2xl"
          />
          <Lock className="relative z-40 text-cyan-500" />
          <h2>End-to-End Encrypted</h2>
          <p className="max-w-1/2 ">
            Your data never touches our servers in readable form. We use
            quantum-resistant protocols to ensure your voice remains yours
            alone.
          </p>
        </div>
        <div className="col-start-4 relative w-full h-full">
          <div
            className="bg-gray-600 
            bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkrzEoHZP0WaVb0zDVpT442u9nTFkouHkSswrE3hJxChWp6y8tnQCzR1Wj2KgLiZtrP4cvbZL56nD7bAnWR_sNb4ukiXJm6YsnW8-_OVaCinEhzla1Jo_svsozuETK9WSVrCbgV3eoGFops6V4hI5mlG2jKs6iV5Etjvu-1HtjjDZVKoR6aX9h8DvQyVPI1KdwrEDsglOpzdqfmjYJ79gKroex9cltFvLHFJSt-XaV9U4giDZb97rZ2Y58g-RXAi2xcTmW4o7O')] bg-blend-multiply absolute w-full h-full object-center object-cover self-center  bg-center grayscale-75"
          />
          <h2>Lightning Fast</h2>
          <p>
            Global edge nodes ensure sub-50ms latency across any continent.
            Real-time means real-time.
          </p>
        </div>
        <div className="row-start-2">
          <Sync className="text-cyan-500" />
          <h2>Seamless Sync</h2>
          <p>
            Switch from desktop to mobile without losing a single beat. Your
            state is mirrored instantly across your ecosystem.
          </p>
        </div>
        <div className="col-span-2 row-start-2">
          <h2>The Pulse Engine</h2>
          <p>
            Experience communication through our proprietary rhythmic interface
            that prioritizes active contexts.
          </p>
        </div>
        <div className="col-start-4 row-start-2 w-full">
          <div className="users">
            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnMMF4caQbWZ0PSkUNcTbxhlYdDQXYoh_0O8kaMaNAkK2AIgGCx7ahWMxGyI8sUFDkGrhYuFWBk8-xyP0i4-jdjhZr-PCewj5kCLwxnFZ9owUorWzGBrzpaiHtPFLrcoq6TlpdfSNnVaujVGDRZVJaA0YzZbBBKQQe6wMyb10i01QlQcrPyGV7KbzSCTOigLa6Xku9ocFdoeTxm7YX452JxiEU4CDvV_g2sowtoU7fV3Voq4LJrPSWx9lFEUtH8Kijm4Ri5BkT"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLiCZoe4RFdDmORASHbn0Y2Xaxdgbt4A3Z6CzLhRC5jZLes0HphM6WzV5GmwH_w6NzyS4MLXGYX5cBJCtiMbgknF_8wiFN3Jqmwx8OqJ13HlGXZ-xrTChw-AnyzqfrJ4GcpGw0DRTqWkR0vrczq_h2dyGSP-96RxUbddB7WkGcdK_rvTT-ACWDDnh7B36f2idDZ3iIVFnXotzCwfkA9CCMR_V3LX5OscKbue7P7ZkwhbiCsLlaJbhjmGEfEI5E0wosCwAU-YuF"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAshiX8yFP85XdvWUcPrEBFuHMNN-W7-tnc0pP3R-reSQQitD0BBszNQ3JdnlmcjH55hUVaxG9kzbRHV9RpV1iudodzv5AsJWyv8MWxge4J1qNFdVLDwjyzqRf5402wtA_gJNIyCliY5nQYfAIDNaONur2EjqDmT_nz3FVqzDEYfLhCxIPd2BP8fx6iub3eFogBBfSQygcTeE1_Ig_Wb84eD13_T5tnsJySBZQxkz4V__OBqUGXYtbd_5DVPgD2xhThl7il7Wk8"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
