#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// use tauri::Manager;

// #[tauri::command]
// fn close_splashscreen(window: tauri::Window) {
//   if let Some(splashscreen) = window.get_window("splashscreen") {
//     splashscreen.close().unwrap();
//   }
//   window.get_window("main").unwrap().show().unwrap();
// }


// #![deny(warnings)]
// #![warn(rust_2018_idioms)]
use std::{fs::File, io::Write};
use hyper::Client;


async fn fetch_uri(s: &str) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
  let client = Client::new();
  let uri = s.parse()?;
  let res = client.get(uri).await?;
  let mut file = File::create("target/res.txt")?;

  for item in res.headers() {
    let (name, value) = (item.0.as_str(), item.1.to_str().unwrap());
    let mut s = String::from("".to_string() + name + ":" + value);
    s.push('\n');
    match file.write_all(s.as_bytes()) {
      Ok(_) => {},
      Err(_) => {},
    }
  }

  // while let Some(next) = res.data().await {
  //   let chunk = next?;
  //   file.write_all(&chunk)?;
  // }
  Ok(())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {

  let r = fetch_uri("http://www.baidu.com").await;
  
  let context = tauri::generate_context!();
  tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler![close_splashscreen])
    .menu(tauri::Menu::os_default(&context.package_info().name))
    .run(context)
    .expect("error while running tauri application");

  r
}
