/*
 * Created Date: 2022-06-28 01:41:19
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2022-06-28 02:58:59
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2022 ⚐
 * Virgil-N will save your soul!
 * -----
 */

use tauri::Manager;
use std::path::Path;
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
  for disk in sys.disks() {
    if Path::new(&path).starts_with(disk.mount_point()) {
      return disk.available_space();
    }
  }
  0
}