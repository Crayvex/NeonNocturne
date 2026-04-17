import { LockKeyholeIcon as Lock, WifiSync as Sync } from "lucide-react"

const Features = () => {
  return (
    <div className="features">
        <h1 className="font-bold">ENGINEERED FOR <span className="text-purple-400">ELITES</span></h1>
        <p>High-performance communication requires more than just pixels. It requires a philosophy of power.</p>
        <div>
            <div>
                <Lock />
                <h2>End-to-End Encrypted</h2>
                <p>Your data never touches our servers in readable form. We use quantum-resistant protocols to ensure your voice remains yours alone.</p>
            </div>
            <div>
                
                <h2>Lightning Fast</h2>
                <p>Global edge nodes ensure sub-50ms latency across any continent. Real-time means real-time.</p>
            </div>
            <div>
                <Sync />
                <h2>Seamless Sync</h2>
                <p>Switch from desktop to mobile without losing a single beat. Your state is mirrored instantly across your ecosystem.</p>
            </div>
            <div>
                <h2>The Pulse Engine</h2>
                <p>Experience communication through our proprietary rhythmic interface that prioritizes active contexts.</p>
            </div>
            <div>
                <img src="/Images.Default.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Features