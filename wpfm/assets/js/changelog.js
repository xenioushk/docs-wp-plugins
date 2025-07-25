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
  var metaData = ["1.4.7", "20/06/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, June, 20 - v 1.4.7", ["Updated: Plugin for WooCommerce 9.9.4", "Updated: Plugin for WordPress 6.8.1"]],
    ["2025, January, 29 - v 1.4.6", ["Updated: Plugin for WooCommerce 9.6.0"]],
    ["2024, December, 08 - v 1.4.5", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin for WooCommerce 9.4.3"]],
    ["2024, August 21 - v 1.4.4", ["Updated: Plugin for WooCommerce 9.3.2"]],
    ["2024, July 29 - v 1.4.3", ["Fixed: Custom theme error message", "Updated: Plugin for WooCommerce 9.1.4"]],
    ["2024, July 22 - v 1.4.2", ["Fixed: PHP Warning issue", "Updated: Plugin for WooCommerce 9.1.2"]],
    ["2023, December 10 - v 1.4.1", ["Updated: Plugin for WooCommerce 8.3.1"]],
    ["2023, October 27 - v 1.4.0", ["Fixed: Admin panel notice.", "Updated: Plugin for WooCommerce 8.2.1"]],
    ["2023, October 05 - v 1.3.9", ["Updated: Plugin translation file", "Updated: Plugin styles and javascripts."]],
    ["2023, September 15 - v 1.3.8", ["Fixed: Meta link issue for the options panel.", "Updated: Plugin translation file", "Updated: Plugin styles and javascripts."]],
    ["2023, September 03 - v 1.3.7", ["Fixed: Plugin code issues.", "Updated: Plugin for WooCommerce 8.3.0", "Updated: Plugin styles and javascripts."]],
    ["2023, August 03 - v 1.3.6", ["Updated: Plugin license notice and activation page.", "Updated: Plugin for WooCommerce 8.0.0"]],
    ["2023, July 29 - v 1.3.5", ["Fixed: Options Panel Bug.", "Updated: Plugin for WooCommerce 8.0.0"]],
    ["2023, July 24 - v 1.3.4", ["Fixed: Plugin code issues."]],
  ]
  generateDynamicLog(changeLogData)
})
