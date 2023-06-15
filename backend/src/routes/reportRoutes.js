const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController');

// Rota para geração de relatório geral
router.get('/reports', ReportController.generateReport);

// Rota para geração de relatório por categoria
router.get('/reports/category', ReportController.generateCategoryReport);

module.exports = router;
