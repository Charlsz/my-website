export function Border1() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <span style={{ position: "absolute", top: 0, left: -0.5, display: "block", width: 24, height: 24, zIndex: 30, borderTop: "1px dashed #a1a1aa", borderLeft: "1px dashed #a1a1aa" }} />
      <span style={{ position: "absolute", top: -1, right: -1, display: "block", width: 24, height: 24, zIndex: 30, borderTop: "1px dashed #a1a1aa", borderRight: "1px dashed #a1a1aa" }} />
      <span style={{ position: "absolute", bottom: -1, left: -0.5, display: "block", width: 24, height: 24, zIndex: 30, borderBottom: "1px dashed #a1a1aa", borderLeft: "1px dashed #a1a1aa" }} />
      <span style={{ position: "absolute", bottom: -1, right: -1, display: "block", width: 24, height: 24, zIndex: 30, borderBottom: "1px dashed #a1a1aa", borderRight: "1px dashed #a1a1aa" }} />
    </div>
  )
}
