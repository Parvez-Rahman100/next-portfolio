import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <div className="loader">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loader"
            exit={{ scale: 0 }}
            key="motiondivleave"
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            <motion.svg
              id="Logo"
              width="335.9"
              height="69.751"
              viewBox="0 0 350.9 69.751"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Logo</title>
              <g>
                <g
                  id="svgGroup"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillRule="evenodd"
                  fontSize="9pt"
                  strokeWidth="0.25mm"
                  fill="#000"
                >
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    exit={{
                      scale: 2,
                    }}
                    fill="currentColor"
                    d="M 158.95 16.201 A 62.71 62.71 0 0 0 157.625 15.884 A 52.749 52.749 0 0 0 155.525 15.451 A 14.734 14.734 0 0 0 155.473 15.441 Q 154.657 15.294 153.736 15.221 A 24.048 24.048 0 0 0 151.85 15.151 Q 148.606 15.151 145.951 15.857 A 14.759 14.759 0 0 0 140.175 18.776 A 22.177 22.177 0 0 0 139.64 19.239 Q 137.482 21.168 135.64 23.813 A 36.739 36.739 0 0 0 132.75 28.801 L 131.6 16.201 L 118.3 16.201 L 118.3 21.451 L 126.85 21.451 L 126.85 63.501 L 118.3 63.501 L 118.3 68.701 L 143.85 68.701 L 143.85 63.501 L 133.05 63.501 L 133.05 39.101 Q 135.85 29.751 140.3 25.426 Q 144.75 21.101 151.1 21.101 Q 152.003 21.101 152.8 21.164 A 15.073 15.073 0 0 1 154.125 21.326 Q 154.953 21.466 155.947 21.714 A 38.472 38.472 0 0 1 157.2 22.051 L 158.95 16.201 L 152.65 16.201 L 152.25 22.451 L 152.25 32.701 L 158.25 32.701 L 158.95 16.201 Z M 335.7 21.301 L 305.8 62.951 L 335.9 62.951 L 334.95 68.701 L 298 68.701 L 298 63.751 L 328.05 22.101 L 300.35 22.101 L 300.35 16.201 L 335.7 16.201 L 335.7 21.301 Z M 213.35 16.201 L 219.85 16.201 L 200.3 68.701 L 193.15 68.701 L 173.85 16.201 L 180.3 16.201 L 197 62.401 L 213.35 16.201 Z M 93.45 31.751 L 93.45 58.351 Q 93.45 61.551 94.55 63.026 A 5.305 5.305 0 0 0 96.057 64.374 Q 96.716 64.777 97.547 65.069 A 10.067 10.067 0 0 0 97.95 65.201 L 96.25 69.751 Q 93.25 69.301 90.9 67.551 Q 88.55 65.801 87.6 62.201 Q 84.85 65.851 80.725 67.776 A 20.452 20.452 0 0 1 74.545 69.513 A 25.613 25.613 0 0 1 71.4 69.701 Q 63.6 69.701 59.15 65.301 A 14.71 14.71 0 0 1 54.987 57.093 A 20.985 20.985 0 0 1 54.7 53.551 Q 54.7 45.551 60.925 41.301 Q 67.15 37.051 79.05 37.051 L 87 37.051 L 87 31.951 A 16.75 16.75 0 0 0 86.729 28.822 Q 86.022 25.114 83.475 23.326 A 12.408 12.408 0 0 0 79.752 21.591 Q 77.186 20.851 73.85 20.851 Q 71.2 20.851 67.85 21.451 A 39.4 39.4 0 0 0 64.545 22.2 Q 62.578 22.73 60.4 23.501 L 58.6 18.401 Q 62.849 16.835 66.398 16.11 A 36.846 36.846 0 0 1 67.225 15.951 A 43.213 43.213 0 0 1 73.373 15.275 A 38.75 38.75 0 0 1 74.75 15.251 A 30.158 30.158 0 0 1 80.059 15.687 Q 82.932 16.202 85.198 17.324 A 14.103 14.103 0 0 1 88.725 19.776 A 15.091 15.091 0 0 1 93.277 29.006 A 21.084 21.084 0 0 1 93.45 31.751 Z M 278 44.951 L 242.3 44.951 Q 242.416 50.05 243.77 53.731 A 16.919 16.919 0 0 0 244.675 55.776 A 16.643 16.643 0 0 0 247.119 59.297 A 13.329 13.329 0 0 0 250.55 62.001 Q 254.2 64.001 258.5 64.001 A 24.523 24.523 0 0 0 262.303 63.719 A 18.405 18.405 0 0 0 265.875 62.801 Q 268.999 61.638 272.428 59.303 A 43.615 43.615 0 0 0 272.65 59.151 L 275.9 63.801 Q 272.25 66.601 267.675 68.151 A 29.339 29.339 0 0 1 261.802 69.513 A 25.245 25.245 0 0 1 258.75 69.701 A 25.85 25.85 0 0 1 252.606 69.003 A 19.964 19.964 0 0 1 246.325 66.301 A 21.319 21.319 0 0 1 239.125 58.264 A 26.017 26.017 0 0 1 238.4 56.776 A 30.46 30.46 0 0 1 236.176 49.244 A 41.267 41.267 0 0 1 235.65 42.501 A 38.89 38.89 0 0 1 236.328 35.074 A 29.96 29.96 0 0 1 238.45 28.351 A 25.165 25.165 0 0 1 242.163 22.424 A 21.438 21.438 0 0 1 246.225 18.726 A 19.337 19.337 0 0 1 256.275 15.298 A 24.041 24.041 0 0 1 257.8 15.251 A 22.082 22.082 0 0 1 263.22 15.887 A 17.225 17.225 0 0 1 268.75 18.351 A 18.83 18.83 0 0 1 274.562 24.766 A 23.764 23.764 0 0 1 275.725 27.126 Q 277.994 32.435 278.14 39.648 A 49.481 49.481 0 0 1 278.15 40.651 A 62.603 62.603 0 0 1 278.138 41.894 Q 278.127 42.482 278.103 43.006 A 37.34 37.34 0 0 1 278.1 43.076 Q 278.05 44.151 278 44.951 Z M 15.6 42.401 L 6.4 42.401 L 6.4 68.701 L 0 68.701 L 0 0.001 L 16.3 0.001 A 44.898 44.898 0 0 1 23.817 0.591 Q 27.873 1.281 31.148 2.777 A 22.488 22.488 0 0 1 35.025 5.026 A 16.119 16.119 0 0 1 41.307 14.733 A 25.965 25.965 0 0 1 41.95 20.701 Q 41.95 26.687 40.07 30.849 A 15.521 15.521 0 0 1 38.55 33.501 A 18.47 18.47 0 0 1 30.293 39.913 A 22.827 22.827 0 0 1 29.2 40.326 Q 23.25 42.401 15.6 42.401 Z M 17.65 5.451 L 6.4 5.451 L 6.4 36.851 L 16.95 36.851 A 34.254 34.254 0 0 0 21.789 36.525 A 25.677 25.677 0 0 0 26.15 35.526 Q 30.2 34.201 32.575 30.726 Q 34.333 28.153 34.79 23.978 A 28.816 28.816 0 0 0 34.95 20.851 Q 34.95 16.751 33.808 13.879 A 11.054 11.054 0 0 0 32.625 11.651 Q 30.3 8.301 26.375 6.876 Q 22.45 5.451 17.65 5.451 Z M 242.4 39.351 L 272.25 39.351 A 35.473 35.473 0 0 0 271.801 34.275 Q 270.877 28.757 268.1 25.576 A 12.745 12.745 0 0 0 258.811 21.073 A 16.367 16.367 0 0 0 257.95 21.051 A 14.709 14.709 0 0 0 251.529 22.435 A 14.635 14.635 0 0 0 247.275 25.551 Q 242.95 30.051 242.4 39.351 Z M 87 56.801 L 87 41.801 L 78.3 41.801 A 42.284 42.284 0 0 0 73.978 42.005 Q 68.025 42.619 65.25 45.076 A 10.794 10.794 0 0 0 61.585 52.716 A 14.9 14.9 0 0 0 61.55 53.751 A 17.536 17.536 0 0 0 61.81 56.878 Q 62.388 60.062 64.25 61.976 Q 66.409 64.195 70.454 64.639 A 19.663 19.663 0 0 0 72.6 64.751 Q 76.9 64.751 80.65 62.651 A 18.848 18.848 0 0 0 86.754 57.149 A 21.857 21.857 0 0 0 87 56.801 Z"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              </g>
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Loader;