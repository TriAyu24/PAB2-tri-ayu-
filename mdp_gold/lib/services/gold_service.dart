// Import package firebase_database untuk mengakses Firebase Realtime Database
import "package:firebase_database/firebase_database.dart";
import "package:flutter/material.dart";

class GoldService{
  final DatabaseReference _database = FirebaseDatabase.instance.ref(
    'harga_emas',
  );

  Stream<DatabaseEvent> getPriceList() {
    // onValue mengembalikan stream yang akan mendengarkan perubahan data
    return _database.onValue;
  }
// step ke 7 buat folder
}