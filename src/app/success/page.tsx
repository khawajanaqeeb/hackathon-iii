import Link from "next/link";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-lg mt-4">Thank you for your purchase.</p>
      <Link href="/" className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700">
        Return to Home
      </Link>
    </div>
  );
}
