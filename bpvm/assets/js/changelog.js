$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Plugin translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }

  // Change only the version and date
  var metaData = ["1.4.3", "03/04/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, April, 03 - v 1.4.3", ["Updated: Plugin activation and deactivation hook, plugin custom tables.", "Updated: Plugin for WordPress 6.7.2", "Updated: Plugin automatic updater & licnese page."]],
    ["2024, December, 08 - v 1.4.2", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin share buttons.", "Fixed: Plugin styles."]],
    ["2024, July, 16 - v 1.4.1", ["Added: Offline purchase verification.", "Updated: Plugin for WordPress 6.5.5"]],
    ["2023, December, 03 - v 1.4.0", ["Update: Plugin options panel.", "Updated: plugin license page."]],
    ["2023, October, 25 - v 1.3.9", ["Update: Plugin voting report page.", "Updated: plugin license page."]],
    ["2023, October, 05 - v 1.3.8", ["Fixed: Plugin text translation issues.", "Updated: Plugin .POT file."]],
    ["2023, September, 14 - v 1.3.7", ["Fixed: Plugin text translation issues.", "Updated: Plugin .POT file."]],
    ["2023, September, 09 - v 1.3.6", ["Fixed: Plugin code issues.", "Fixed: Plugin translation issues.", "Updated: WooCommerce product voting addon to 1.1.1", "Updated: User Vote Tracker addon 1.0.7"]],
  ]
  generateDynamicLog(changeLogData)
})
