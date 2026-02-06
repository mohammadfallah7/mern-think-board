import rateLimit from "../config/upstash.js";

const rateLimiter = async (_, res, next) => {
  try {
    const { success } = await rateLimit.limit("think-board-limiter");

    if (!success)
      return res
        .status(429)
        .json({ message: "To many request. Please try again later." });
    next();
  } catch (error) {
    console.error("Error in rate limiter", error);
    next(error);
  }
};

export default rateLimiter;
