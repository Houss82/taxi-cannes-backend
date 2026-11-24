var express = require("express");
var router = express.Router();

const CESSATION = {
  result: false,
  error:
    "Le site cannestaxi.fr a définitivement cessé son activité. Aucune réservation n’est acceptée.",
};

/**
 * Cessation d'activité — toutes les routes de réservation renvoient 410.
 * Les données historiques en base MongoDB ne sont pas supprimées.
 */

// POST - Créer une nouvelle réservation (désactivé)
router.post("/reservation", async (req, res) => {
  return res.status(410).json(CESSATION);
});

// GET - Récupérer toutes les réservations (désactivé publiquement)
router.get("/reservations", async (req, res) => {
  return res.status(410).json(CESSATION);
});

// GET - Récupérer une réservation par ID (désactivé publiquement)
router.get("/reservation/:id", async (req, res) => {
  return res.status(410).json(CESSATION);
});

// DELETE - Supprimer une réservation (désactivé)
router.delete("/reservation/:id", async (req, res) => {
  return res.status(410).json(CESSATION);
});

module.exports = router;
