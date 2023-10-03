const express = require("express");

const ReservationController = require("../controller/reservationController");

const router = express.Router();

router
  .route("/")
  .get(ReservationController.getAllReservation)
  .post(ReservationController.addReservation);

router
  .route("/accept-reservation/:id")
  .patch(ReservationController.acceptReservation);

router
  .route("/reject-reservation/:id")
  .patch(ReservationController.rejectReservation);

router.route("/:id").delete(ReservationController.deleteReservation);

module.exports = router;
