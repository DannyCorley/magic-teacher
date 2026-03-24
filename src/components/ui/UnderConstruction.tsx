export default function UnderConstruction() {
  return (
    <div className="my-6">
      <div className="construction-stripes p-3 text-center">
        <div
          className="bg-white inline-block px-6 py-3 border-4 border-black font-bold text-lg"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          🚧 UNDER CONSTRUCTION 🚧
          <br />
          <span className="text-sm font-normal">
            MORE FEATURES COMING SOON!! We are adding: Attendance Tracking, Gradebook,{" "}
            Seating Chart Optimizer, and a feature that auto-replies to
            &quot;Will this be on the test?&quot; with &quot;Yes.&quot;
          </span>
        </div>
      </div>
    </div>
  );
}
