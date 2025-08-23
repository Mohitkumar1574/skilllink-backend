const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description, budget } = req.body;

  const job = await Job.create({
    title,
    description,
    budget,
    postedBy: req.user._id
  });

  res.json({ success: true, message: 'Job posted successfully', job });
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find().populate('postedBy', 'name email');
  res.json(jobs);
};

exports.applyJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });

  if (!job.applicants.includes(req.user._id)) {
    job.applicants.push(req.user._id);
    await job.save();
  }

  res.json({ success: true, message: 'Applied to job successfully' });
};
