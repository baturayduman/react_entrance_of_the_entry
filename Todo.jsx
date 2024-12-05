export default function Todo({ isimyeri, tamamlandimi, renkdurumu = 'red' }) {
    if (tamamlandimi) {
        return <h3>{isimyeri} ✓ </h3>
    }

    return <h3>{isimyeri} x </h3>
}
