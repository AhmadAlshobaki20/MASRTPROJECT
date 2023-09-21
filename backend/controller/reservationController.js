const Reservation = require("../model/Reservation");

exports.getAllReservation = async (req, res) => {
  try {
    const AllReservation = await Reservation.find();

    res.status(200).json({
      status: "success",
      data: {
        AllReservation,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: `get reservation failed ${error}`,
    });
  }
};

exports.addReservation = async (req, res) => {
  console.log(req.body);
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    return res.json({ message: reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Teacher accepts a reservation request

exports.acceptReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    console.log(reservation);

    return res.json({ message: "Reservation accepted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Teacher rejects a reservation request
exports.rejectReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    console.log(reservation);

    return res.json({ message: "Reservation rejected" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
