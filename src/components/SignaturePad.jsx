import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = ({ handleInputChange, section, fieldPath }) => {
    const sigCanvasRef = useRef(null);

    // Save signature to state after drawing ends
    const handleDrawingEnded = () => {
        if (sigCanvasRef.current) {
            const signatureData = sigCanvasRef.current.toDataURL();
            handleInputChange(section, fieldPath, signatureData);
        }
    };

    // Clear signature
    const clearSignature = (e) => {
        e.preventDefault();

        sigCanvasRef.current.clear();
    };

    return (
        <div className="space-y-2 relative">
            <SignatureCanvas
                ref={sigCanvasRef}
                onEnd={handleDrawingEnded}
                penColor="blue"
                canvasProps={{
                    className: "border rounded-lg w-full h-56",
                }}
            />
            <button
                onClick={clearSignature}
                className="absolute top-2 right-4 bg-vividRed hover:bg-red-500 text-white text-sm font-medium px-2 py-1 rounded-md"
            >
                Clear
            </button>
        </div>
    );
};

export default SignaturePad;
