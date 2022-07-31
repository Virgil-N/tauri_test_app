/*
 * Created Date: 2022-06-28 01:41:19
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-07-31 22:01:22
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

use tauri::Manager;
use std::path::Path;
use whoami;
use sysinfo::{DiskExt, System, SystemExt};

#[tauri::command]
pub fn show(window: tauri::Window) {
  window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
pub async fn exists(path: String) -> bool {
  Path::new(&path).exists()
}

#[tauri::command]
pub async fn disk_free_size(path: String) -> u64 {
  let sys = System::new_all();
  let os = match whoami::platform() {
    v if v == whoami::Platform::MacOS => "MacOS",
    v if v == whoami::Platform::Windows => "Windows",
    _ => "unknown OS",
  };
  for disk in sys.disks() {
    if os == "MacOS" && disk.name() == "Data" {
      return disk.available_space() / (1024 * 1024 * 1024);
    }
    if os == "Windows" && Path::new(&path).starts_with(disk.mount_point()) {
      println!("{:?}",disk.available_space());
      return disk.available_space() / (1024 * 1024 * 1024);
    }
  }
  0
}