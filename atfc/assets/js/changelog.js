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

  var metaData = ["1.3.1", "29/01/2025"] // Change only the version and date
  updateMetaInfo(metaData)

  // Just add a new row.

  var changeLogData = [
    // Add a new row below this comment.
    ["2025, January, 29 - v 1.3.1", ["Fixed: Attachment size display issue.", "Fixed: Options panel colorpicker display issue.", "Updated: Plugin for WooCommerce 9.6.0"]],
    ["2024, December, 08 - v 1.3.0", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin for WooCommerce 9.4.3"]],
    ["2024, August 21 - v 1.2.9", ["Updated: Plugin for WooCommerce 9.3.2"]],
    ["2024, July 29 - v 1.2.8", ["Updated: Plugin for WooCommerce 9.1.4"]],
    ["2023, December 12 - v 1.2.7", ["Updated: Plugin for WooCommerce 8.3.1"]],
    ["2023, October 27 - v 1.2.6", ["Fixed: Admin panel notice.", "Updated: Plugin for WooCommerce 8.2.1"]],
    ["2023, September 15 - v 1.2.5", ["Fixed: Meta link issue for the options panel.", "Updated: Plugin translation file", "Updated: Plugin styles and javascripts."]],
    ["2023, September 03 - v 1.2.4", ["Fixed: Plugin code issues.", "Updated: Plugin for WooCommerce 8.3.0", "Updated: Plugin styles and javascripts."]],
  ]
  generateDynamicLog(changeLogData)
})
