import { generateExplanation } from "../services/groqService.js";

export const explainTopic = async (req, res) => {

  try {

    const { topic } = req.body;

    const data = await generateExplanation(topic);

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};